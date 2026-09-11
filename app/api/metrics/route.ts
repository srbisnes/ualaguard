import { NextResponse } from "next/server";
import { metrics } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    metrics,
    lastUpdated: new Date().toISOString(),
  });
}
