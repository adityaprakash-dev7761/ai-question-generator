import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
};

//yha pr Database connection ka logic likha gya hai.. Yha mai mongoDb se connect krunga
