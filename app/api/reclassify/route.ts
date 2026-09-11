import { NextRequest, NextResponse } from "next/server";
import { sampleUsers } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    users: sampleUsers,
    totalReclassified: sampleUsers.filter((u) => u.reclassified).length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    const user = sampleUsers.find((u) => u.id === userId) || sampleUsers[0];

    return NextResponse.json({
      success: true,
      user,
      message: user.reclassified
        ? `Usuario recalificado de "${user.previousCategory}" a "${user.newCategory}"`
        : "Usuario ya en categoría óptima",
    });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
