"use client";

import { AlertTriangle, Shield, Zap, Lock } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-600/20">
              <AlertTriangle className="h-3.5 w-3.5" />
              El problema real de Ualá hoy
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Bloqueos falsos positivos + cartera informal sub-evaluada
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">1</span>
                <span>Los sistemas tradicionales de Compliance generan alto volumen de falsos positivos en usuarios digitales e informales, frenando la experiencia y generando fricción innecesaria.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">2</span>
                <span>Los modelos de scoring clásicos sub-evalúan a trabajadores independientes y nativos digitales que no tienen recibo de sueldo formal pero demuestran solvencia real con su comportamiento in-app.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">3</span>
                <span>Modificar el Core Banking para mejorar estos flujos es costoso, riesgoso y puede afectar la licencia regulada.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-600/20">
              <Shield className="h-3.5 w-3.5" />
              La solución UaláGuard
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Middleware API-first · Zero-touch Core
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Zap className="h-3.5 w-3.5" />
                </span>
                <span><strong>Validación proactiva in-app</strong>: antes de bloquear, UaláGuard solicita pruebas de solvencia en tiempo real (saldo, movimientos, consistencia de pagos) y reduce falsos positivos hasta un 40%+.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Zap className="h-3.5 w-3.5" />
                </span>
                <span><strong>Recalificación de cartera informal/digital</strong>: genera un score de solvencia real-time que permite mover usuarios de “alto riesgo / sin historial” a tiers accionables sin tocar el Core.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Lock className="h-3.5 w-3.5" />
                </span>
                <span><strong>Integración vía API</strong>: se inserta como capa intermedia. El Core Banking y la licencia regulada permanecen intactos. Despliegue en días, no en meses.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
