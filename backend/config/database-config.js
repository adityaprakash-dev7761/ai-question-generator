import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to backend/.env or your environment variables.",
    );
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

//yha pr Database connection ka logic likha gya hai.. Yha mai mongoDb se connect krunga
