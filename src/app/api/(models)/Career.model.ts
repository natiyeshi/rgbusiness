import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const careerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    qualifications: {
      type: [String], // Array of strings for qualifications
      required: true,
    },
    placeName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields automatically
  }
);

const Career = mongoose.models.Career || mongoose.model("Career", careerSchema);

export default Career;
