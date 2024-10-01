
import Career from "../../(models)/Career.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
        console.log(params.id)
      const career = await Career.findByIdAndDelete(params.id);
  
      if (!career) {
        return NextResponse.json({ message: "Career not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Career deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}