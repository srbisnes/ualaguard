"use client";

import { Server, Shield, Smartphone, Database, ArrowRight } from "lucide-react";

export default function Architecture() {
  return (
    <section id="arquitectura" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Arquitectura Zero-Touch
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Se integra vía API. El Core Banking y la licencia regulada no se tocan.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-2">
          <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <Smartphone className="h-10 w-10 text-teal-300" />
            <h3 className="mt-3 font-semibold">App Ualá</h3>
            <p className="mt-1 text-sm text-slate-400">In-app challenges & UX</p>
          </div>

          <ArrowRight className="hidden h-6 w-6 text-slate-500 lg:block" />

          <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border-2 border-teal-400/50 bg-teal-500/10 p-6 text-center shadow-lg shadow-teal-500/20">
            <Shield className="h-10 w-10 text-teal-300" />
            <h3 className="mt-3 font-semibold text-teal-200">UaláGuard Middleware</h3>
            <p className="mt-1 text-sm text-teal-100/80">Validación proactiva + Solvency Engine</p>
            <ul className="mt-3 space-y-1 text-left text-xs text-slate-300">
              <li>• API REST / Webhooks</li>
              <li>• Decision engine &lt; 200ms</li>
              <li>• Audit trail completo</li>
            </ul>
          </div>

          <ArrowRight className="hidden h-6 w-6 text-slate-500 lg:block" />

          <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <Server className="h-10 w-10 text-slate-300" />
            <h3 className="mt-3 font-semibold">Core Banking</h3>
            <p className="mt-1 text-sm text-slate-400">Intacto · Sin cambios</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Database className="h-6 w-6 text-teal-300" />
            <h4 className="mt-3 font-semibold">Datos utilizados</h4>
            <p className="mt-1 text-sm text-slate-400">
              Solo señales ya disponibles en la app (saldos, movimientos, P2P, movilidad). Sin datos externos sensibles.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Shield className="h-6 w-6 text-teal-300" />
            <h4 className="mt-3 font-semibold">Cumplimiento regulatorio</h4>
            <p className="mt-1 text-sm text-slate-400">
              No modifica el Core. Mantiene la licencia bancaria intacta. Logs auditables para BCRA / compliance.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Server className="h-6 w-6 text-teal-300" />
            <h4 className="mt-3 font-semibold">Despliegue</h4>
            <p className="mt-1 text-sm text-slate-400">
              API-first. Integración en días. Feature flags. Rollback inmediato. Sin downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
