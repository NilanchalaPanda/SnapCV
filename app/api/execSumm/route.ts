import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Your login logic here
  return NextResponse.json({ message: "Login successful" });
}
