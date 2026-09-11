# UaláGuard by elcryptoboy

**Middleware inteligente de Compliance + Solvencia en tiempo real** diseñado para Ualá.

## El problema que resuelve

- Reduce **hasta un 40%+** los bloqueos falsos positivos de Compliance mediante **validación proactiva in-app**.
- Permite **recalificar la cartera crediticia** de usuarios informales y digitales usando **pruebas de solvencia en tiempo real**.
- Se integra **vía API** sin modificar el Core Banking ni comprometer la licencia regulada.

## Demo en vivo

Esta demo está desplegada en Vercel y lista para presentaciones.

### Características de la demo

1. **Validación proactiva de transacciones**  
   Compará la decisión del motor tradicional vs UaláGuard. Observá cómo se evitan falsos positivos.

2. **Prueba de solvencia real-time**  
   Evaluá un usuario informal/digital y mirá cómo se recalifica de “sin historial / alto riesgo” a un tier accionable.

3. **Arquitectura Zero-Touch**  
   Capa intermedia API-first. Core Banking intacto.

4. **Métricas de impacto**  
   Reducción de falsos positivos, usuarios recalificados, lift de calidad de cartera, ingresos desbloqueados.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- API Routes (simuladas con latencia realista)
- Desplegado en Vercel

## Integración real (concepto)

```
App Ualá  →  UaláGuard Middleware (API)  →  Core Banking
                 ↓
         Decision + Challenge in-app
         + Audit logs
```

- Endpoints propuestos: `/validate`, `/solvency`, `/reclassify`
- Latencia objetivo: < 200ms
- Feature flags + rollback inmediato

## Autor

**elcryptoboy**  
Arquitectura Web3 / Fintech / Omnichain

Repo: https://github.com/srbisnes/ualaguard

---

> Demo no productiva. Todos los datos son simulados. No está afiliada oficialmente a Ualá.
