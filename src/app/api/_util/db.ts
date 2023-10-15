import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDb Connected`);
  } catch (error) {
    console.log(`DB Error: ${error}`)
    process.exit(1)
  }
}

export default connectDb