"use client";

import { metrics } from "@/lib/mock-data";
import { formatCurrency, formatPercent } from "@/lib/utils";

export default function Metrics() {
  const cards = [
    {
      label: "Reducción de falsos positivos",
      value: formatPercent(metrics.falsePositiveReduction),
      description: "Bloqueos innecesarios evitados",
    },
    {
      label: "Transacciones procesadas",
      value: metrics.transactionsProcessed.toLocaleString("es-AR"),
      description: "En simulación de demo",
    },
    {
      label: "Usuarios recalificados",
      value: metrics.usersReclassified.toLocaleString("es-AR"),
      description: "Informales & digitales",
    },
    {
      label: "Lift de calidad de cartera",
      value: formatPercent(metrics.portfolioQualityLift),
      description: "Mejora estimada post-recalificación",
    },
    {
      label: "Bloqueos de compliance evitados",
      value: metrics.complianceBlocksAvoided.toLocaleString("es-AR"),
      description: "Mejor experiencia de usuario",
    },
    {
      label: "Ingresos desbloqueados (est.)",
      value: formatCurrency(metrics.revenueUnlockedARS),
      description: "Por mayor aprobación sana",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Impacto medible
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Números de la simulación realista para el contexto de Ualá
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{card.value}</p>
              <p className="mt-1 text-sm text-slate-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
