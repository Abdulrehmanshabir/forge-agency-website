import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Log data to console
    console.log("New contact form submission:");
    console.dir(data, { depth: null });
    
    // TODO: Add Resend/SendGrid integration later to actually send emails.
    
    return NextResponse.json({ success: true, message: "Message received successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error parsing contact form data:", error);
    return NextResponse.json({ success: false, message: "Failed to process request." }, { status: 400 });
  }
}
