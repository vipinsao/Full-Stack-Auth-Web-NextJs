import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      //send verification email
      await sendEmail({
        email,
        emailType: "Reset your password",
        userId: user._id,
      });
      return NextResponse.json({
        message: "Password reset email sent successfully",
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
