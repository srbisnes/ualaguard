"use client";

import { Shield, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-violet-600">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900">
                Ualá<span className="text-teal-600">Guard</span>
              </p>
              <p className="text-xs text-slate-500">by elcryptoboy · Built for Ualá</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a
              href="https://github.com/srbisnes/ualaguard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              Código abierto
            </a>
            <span>·</span>
            <span>Demo no productiva · Solo fines de presentación</span>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          Esta demo es una prueba de concepto independiente. No está afiliada oficialmente a Ualá.
          Todos los datos son simulados.
        </p>
      </div>
    </footer>
  );
}
