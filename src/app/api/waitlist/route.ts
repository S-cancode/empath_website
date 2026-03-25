import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() });

    if (dbError) {
      // Unique constraint violation = duplicate
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    try {
      await getResend().emails.send({
        from: "Empath <help@empathapp.co.uk>",
        to: email,
        subject: "You're on the Empath waitlist!",
        html: `
          <div style="max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <img src="https://empathapp.co.uk/images/empath-logo.png" alt="Empath" style="width: 140px; margin-bottom: 32px;" />
            <h1 style="font-family: 'Fraunces', Georgia, serif; color: #0088CC; font-size: 28px; margin-bottom: 16px;">
              Welcome to Empath
            </h1>
            <p style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #374151; font-size: 16px; line-height: 1.6;">
              We're so glad you're here. You've just taken a meaningful step, and we want you to know it matters.
            </p>
            <p style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #374151; font-size: 16px; line-height: 1.6;">
              Stay tuned for updates as we get closer to launch. We're building something special, and you're a part of it from the very beginning.
            </p>
            <p style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #6B7280; font-size: 14px; margin-top: 32px;">
              With love,<br/>The Empath Team
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Don't fail the request if email sending fails
      console.error("Resend error:", emailError);
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
