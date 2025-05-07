import { NextResponse } from "next/server"

export async function GET() {
  return new NextResponse<string>("PONG", {
    headers: { "Content-Type": "text/plain" },
  })
}
