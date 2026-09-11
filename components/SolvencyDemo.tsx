"use client";

import { useState } from "react";
import { Loader2, TrendingUp, User } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface SolvencyResult {
  success: boolean;
  traditionalScore: number;
  ualaguardScore: number;
  proofs: {
    availableBalance: number;
    recentInflows: number;
    paymentConsistency30d: number;
    digitalActivityScore: number;
    mobilityStability: number;
    p2pReputation: number;
  };
  category: string;
  reclassified: boolean;
  latencyMs: number;
}

export default function SolvencyDemo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolvencyResult | null>(null);

  const runSolvency = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/solvency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "usr_informal_demo" }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Prueba de solvencia en tiempo real
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Recalificá usuarios informales y digitales sin historial formal
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <button
            onClick={runSolvency}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Ejecutando prueba de solvencia...
              </>
            ) : (
              <>
                <User className="h-5 w-5" />
                Evaluar usuario informal / digital
              </>
            )}
          </button>

          {result && (
            <div className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <p className="text-sm font-medium text-slate-500">Score Tradicional</p>
                  <p className="mt-2 text-4xl font-bold text-slate-400">{result.traditionalScore}</p>
                  <p className="mt-1 text-xs text-slate-400">Sin historial formal → bajo</p>
                </div>
                <div className="rounded-2xl border-2 border-teal-300 bg-teal-50 p-6 text-center">
                  <p className="text-sm font-medium text-teal-700">UaláGuard Score</p>
                  <p className="mt-2 text-4xl font-bold text-teal-700">{result.ualaguardScore}</p>
                  <p className="mt-1 text-xs font-semibold text-teal-600">{result.category}</p>
                </div>
              </div>

              {result.reclassified && (
                <div className="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-teal-900">Usuario recalificado</p>
                    <p className="text-sm text-teal-800">
                      Pasó de “Alto riesgo / Sin historial” a <strong>{result.category}</strong>
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Pruebas de solvencia utilizadas</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Saldo disponible</span>
                    <span className="font-medium">{formatCurrency(result.proofs.availableBalance)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Ingresos recientes (30d)</span>
                    <span className="font-medium">{result.proofs.recentInflows}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Consistencia de pagos</span>
                    <span className="font-medium">{result.proofs.paymentConsistency30d}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Actividad digital</span>
                    <span className="font-medium">{result.proofs.digitalActivityScore}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Estabilidad de movilidad</span>
                    <span className="font-medium">{result.proofs.mobilityStability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Reputación P2P</span>
                    <span className="font-medium">{result.proofs.p2pReputation}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400">Latencia: {result.latencyMs}ms</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
