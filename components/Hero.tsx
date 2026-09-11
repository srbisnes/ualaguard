"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Activity, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-teal-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            Diseñado para Ualá · Zero-touch Core Banking
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Reduce{" "}
            <span className="bg-gradient-to-r from-teal-300 to-violet-300 bg-clip-text text-transparent">
              40%+
            </span>{" "}
            los bloqueos falsos positivos de Compliance
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Validación proactiva in-app + pruebas de solvencia en tiempo real.
            Recalifica la cartera de usuarios informales y digitales sin modificar
            el Core Banking ni comprometer la licencia regulada.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
            >
              Ver Demo en vivo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#arquitectura"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Arquitectura
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: Activity,
              label: "Falsos positivos evitados",
              value: "41.3%",
              sub: "en simulación realista",
            },
            {
              icon: Users,
              label: "Usuarios recalificados",
              value: "3.842",
              sub: "informales & digitales",
            },
            {
              icon: CheckCircle2,
              label: "Latencia promedio",
              value: "187ms",
              sub: "solvencia real-time",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <stat.icon className="h-6 w-6 text-teal-300" />
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
