import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../(models)/User.model";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options"; // adjust the import to your auth options path

export async function PATCH(req: any) {
  try {
    const session = await getServerSession(options);

    // Ensure the user is authenticated
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Parse request data
    const body = await req.json();
    const { currentPassword, newPassword } = body;

    // Validate the data
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: "Please provide both current and new passwords." },
        { status: 400 }
      );
    }

    // Find the user by email from session
    const user = await User.findOne({ email: session.user.email }).exec();
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // Compare current password with the stored hash
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Current password is incorrect." },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedNewPassword;
    await user.save();

    return NextResponse.json(
      { message: "Password updated successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as any)?.message ?? "Server error", err },
      { status: 500 }
    );
  }
}
