import mongoose from "mongoose";

export default async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MONGODB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}
