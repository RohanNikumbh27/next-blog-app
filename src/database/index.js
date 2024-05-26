import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const DBUrl =
      await "mongodb+srv://rohannikumbh:Rohan@2793@cluster0.af0rdog.mongodb.net/";

    mongoose
      .connect(DBUrl)
      .then(() => console.log("Connection URL is Successfull"))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
