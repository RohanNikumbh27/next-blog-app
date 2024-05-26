import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Blog from "@/models/blog";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;
    console.log("this is extractBlogData", extractBlogData);

    const { er } = AddNewBlog.validate({
      title,
      description,
    });

    if (er) {
      return NextResponse.json({
        success: false,
        message: er.details[0].message,
      });
    }

    const newlyCreatedBlogItem = await Blog.create(extractBlogData);

    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added Successsfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong, please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message:
        "Something went wrong ! please Try again. error from add-blog-route-POST",
    });
  }
}
