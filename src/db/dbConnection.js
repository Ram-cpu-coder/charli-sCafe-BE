import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/products`)
    connection && console.log("Database got connected successfully!!!")
  } catch (error) {
    console.log("Error while connecting to the database!!!", error)
  }
}
export default dbConnection;