import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { handlerUserID, fullName, phoneNo, emailID } = await request.json();
    console.log(handlerUserID, fullName, phoneNo, emailID);
  } catch (err) {
    return new NextResponse(
      `message: ${(err as Error).message} || Something went wrong`,
      {
        status: 404,
      }
    );
  }
}
