import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Stock');
        console.log("Connected to database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export { connectDB };
