import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, amount, merchant, category } = body;

    // Simulated UaláGuard decision engine
    const riskScore = Math.random() * 0.4 + (amount > 100000 ? 0.4 : 0.1);
    const digitalSignals = Math.random() > 0.3; // mock digital behavior
    const solvencyProof = Math.random() > 0.25;

    let traditionalDecision: "BLOCK" | "ALLOW" = riskScore > 0.55 ? "BLOCK" : "ALLOW";
    let ualaguardDecision: "BLOCK" | "ALLOW" | "CHALLENGE" = traditionalDecision;
    let reason = "";
    let isFalsePositive = false;

    if (traditionalDecision === "BLOCK" && (digitalSignals || solvencyProof)) {
      if (solvencyProof && digitalSignals) {
        ualaguardDecision = "ALLOW";
        reason = "Validación proactiva in-app: solvencia real-time + comportamiento digital confirmado";
        isFalsePositive = true;
      } else if (solvencyProof) {
        ualaguardDecision = "CHALLENGE";
        reason = "Challenge proactivo: solicitar prueba de solvencia in-app (saldo / movimientos)";
        isFalsePositive = true;
      } else {
        reason = "Bloqueo confirmado por señales de riesgo reales";
      }
    } else if (traditionalDecision === "ALLOW") {
      reason = "Transacción de bajo riesgo aprobada";
    } else {
      reason = "Bloqueo por riesgo elevado sin señales mitigantes";
    }

    // Simulate latency of real-time check
    await new Promise((r) => setTimeout(r, 80 + Math.random() * 120));

    return NextResponse.json({
      success: true,
      transactionId: `tx_${Date.now()}`,
      userId,
      amount,
      merchant,
      category,
      riskScore: Number(riskScore.toFixed(3)),
      traditionalDecision,
      ualaguardDecision,
      reason,
      isFalsePositive,
      latencyMs: Math.round(80 + Math.random() * 120),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
