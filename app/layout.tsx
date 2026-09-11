import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UaláGuard by elcryptoboy | Compliance Middleware + Real-time Solvency",
  description:
    "Middleware que reduce hasta 40% los bloqueos falsos positivos de Compliance mediante validación proactiva in-app y recalifica la cartera crediticia de usuarios informales y digitales con pruebas de solvencia en tiempo real. API-first, zero-touch al Core Banking.",
  keywords: ["Ualá", "Compliance", "Fintech", "Credit Scoring", "False Positives", "Argentina"],
  authors: [{ name: "elcryptoboy" }],
  openGraph: {
    title: "UaláGuard — Reduce 40% False Positives de Compliance",
    description: "Validación proactiva + solvencia real-time para usuarios informales. Sin tocar el Core Banking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
