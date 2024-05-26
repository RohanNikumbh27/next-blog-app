"use client";

import { useState } from "react";
import AddNewBlog from "../add-new-blog/page";
import { Description } from "@radix-ui/react-dialog";
import { NextResponse } from "next/server";

const initialBlogFormData = {
  title: "",
  description: "",
};

export default function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  async function handleSaveBlogData() {
    try {
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });
      const result = await apiResponse.json();
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-700 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div>Blog List Section</div>
    </div>
  );
}
