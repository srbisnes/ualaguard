import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    // Real-time solvency proof simulation
    const proofs = {
      availableBalance: Math.floor(Math.random() * 180000) + 15000,
      recentInflows: Math.floor(Math.random() * 8) + 2,
      paymentConsistency30d: Math.round(70 + Math.random() * 28),
      digitalActivityScore: Math.round(65 + Math.random() * 33),
      mobilityStability: Math.round(60 + Math.random() * 35),
      p2pReputation: Math.round(55 + Math.random() * 40),
    };

    const compositeScore = Math.round(
      proofs.paymentConsistency30d * 0.3 +
      proofs.digitalActivityScore * 0.25 +
      proofs.mobilityStability * 0.15 +
      proofs.p2pReputation * 0.15 +
      Math.min(proofs.availableBalance / 2000, 100) * 0.15
    );

    const category =
      compositeScore >= 780
        ? "Premium Digital - Tier A"
        : compositeScore >= 680
        ? "Solvente Digital - Tier B"
        : compositeScore >= 580
        ? "Solvente Informal - Tier C"
        : "Requiere monitoreo";

    await new Promise((r) => setTimeout(r, 60 + Math.random() * 100));

    return NextResponse.json({
      success: true,
      userId,
      traditionalScore: Math.floor(Math.random() * 200) + 250,
      ualaguardScore: compositeScore,
      proofs,
      category,
      reclassified: compositeScore > 580,
      latencyMs: Math.round(60 + Math.random() * 100),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
