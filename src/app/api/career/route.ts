import Career from "../(models)/Career.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";
import { careerValidation } from "@/validation/career.validation";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const careerData = body.formData;
      await careerValidation.validate(careerData);
      const newCareer = await Career.create(careerData);
      return NextResponse.json(
        { message: "Career created successfully!" , newCareer },
        { status: 200 }
      );
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const careers = await Career.find();
      return NextResponse.json(careers, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    