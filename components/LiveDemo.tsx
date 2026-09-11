"use client";

import { useState } from "react";
import { Play, Loader2, CheckCircle, XCircle, AlertCircle, Shield } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ValidationResult {
  success: boolean;
  transactionId: string;
  amount: number;
  merchant: string;
  riskScore: number;
  traditionalDecision: "BLOCK" | "ALLOW";
  ualaguardDecision: "BLOCK" | "ALLOW" | "CHALLENGE";
  reason: string;
  isFalsePositive: boolean;
  latencyMs: number;
}

export default function LiveDemo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [amount, setAmount] = useState(85000);
  const [merchant, setMerchant] = useState("Mercado Libre");

  const runValidation = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "usr_demo_" + Date.now(),
          amount,
          merchant,
          category: "ecommerce",
        }),
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
    <section id="demo" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Demo en vivo · Validación proactiva
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Simulá una transacción y observá cómo UaláGuard decide vs el motor tradicional
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Monto (ARS)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Comercio</label>
              <select
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              >
                <option>Mercado Libre</option>
                <option>Transferencia P2P</option>
                <option>Netflix</option>
                <option>Retiro ATM</option>
                <option>Sube</option>
              </select>
            </div>
          </div>

          <button
            onClick={runValidation}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-violet-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:from-teal-500 hover:to-violet-500 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Evaluando en tiempo real...
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                Ejecutar validación UaláGuard
              </>
            )}
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="text-sm text-slate-500">Risk Score</p>
                  <p className="text-2xl font-bold text-slate-900">{(result.riskScore * 100).toFixed(1)}%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Latencia</p>
                  <p className="text-2xl font-bold text-teal-600">{result.latencyMs}ms</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`rounded-xl border-2 p-4 ${result.traditionalDecision === "BLOCK" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Motor Tradicional</p>
                  <div className="mt-2 flex items-center gap-2">
                    {result.traditionalDecision === "BLOCK" ? (
                      <XCircle className="h-6 w-6 text-red-600" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                    <span className="text-xl font-bold">{result.traditionalDecision}</span>
                  </div>
                </div>

                <div className={`rounded-xl border-2 p-4 ${
                  result.ualaguardDecision === "BLOCK"
                    ? "border-red-200 bg-red-50"
                    : result.ualaguardDecision === "CHALLENGE"
                    ? "border-amber-200 bg-amber-50"
                    : "border-teal-200 bg-teal-50"
                }`}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">UaláGuard</p>
                  <div className="mt-2 flex items-center gap-2">
                    {result.ualaguardDecision === "BLOCK" ? (
                      <XCircle className="h-6 w-6 text-red-600" />
                    ) : result.ualaguardDecision === "CHALLENGE" ? (
                      <AlertCircle className="h-6 w-6 text-amber-600" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    )}
                    <span className="text-xl font-bold">{result.ualaguardDecision}</span>
                  </div>
                </div>
              </div>

              {result.isFalsePositive && (
                <div className="flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="font-semibold text-teal-900">Falso positivo evitado</p>
                    <p className="mt-1 text-sm text-teal-800">{result.reason}</p>
                  </div>
                </div>
              )}

              {!result.isFalsePositive && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-700">{result.reason}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
