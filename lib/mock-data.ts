export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  merchant: string;
  category: string;
  timestamp: string;
  riskScore: number;
  traditionalDecision: "BLOCK" | "ALLOW";
  ualaguardDecision: "BLOCK" | "ALLOW" | "CHALLENGE";
  reason: string;
  isFalsePositive: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  type: "informal" | "digital" | "formal";
  traditionalScore: number;
  ualaguardScore: number;
  monthlyIncome: number | null;
  digitalBehaviorScore: number;
  paymentConsistency: number;
  solvencyProofs: number;
  reclassified: boolean;
  previousCategory: string;
  newCategory: string;
}

export const sampleTransactions: Transaction[] = [
  {
    id: "tx_001",
    userId: "usr_inf_01",
    amount: 45000,
    merchant: "Mercado Libre",
    category: "ecommerce",
    timestamp: new Date().toISOString(),
    riskScore: 0.62,
    traditionalDecision: "BLOCK",
    ualaguardDecision: "ALLOW",
    reason: "Validación proactiva: historial de pagos digitales + solvencia real-time confirmada",
    isFalsePositive: true,
  },
  {
    id: "tx_002",
    userId: "usr_dig_02",
    amount: 128000,
    merchant: "Transferencia P2P",
    category: "p2p",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    riskScore: 0.78,
    traditionalDecision: "BLOCK",
    ualaguardDecision: "CHALLENGE",
    reason: "Challenge in-app: prueba de solvencia con saldo + movimientos recientes",
    isFalsePositive: true,
  },
  {
    id: "tx_003",
    userId: "usr_inf_03",
    amount: 8900,
    merchant: "Sube / Transporte",
    category: "mobility",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    riskScore: 0.31,
    traditionalDecision: "ALLOW",
    ualaguardDecision: "ALLOW",
    reason: "Patrón de movilidad estable + bajo monto",
    isFalsePositive: false,
  },
  {
    id: "tx_004",
    userId: "usr_frm_04",
    amount: 350000,
    merchant: "Retiro ATM",
    category: "cash",
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    riskScore: 0.89,
    traditionalDecision: "BLOCK",
    ualaguardDecision: "BLOCK",
    reason: "Alto riesgo real: patrón atípico + monto elevado sin justificación",
    isFalsePositive: false,
  },
  {
    id: "tx_005",
    userId: "usr_dig_05",
    amount: 67000,
    merchant: "Netflix + Spotify",
    category: "subscription",
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    riskScore: 0.45,
    traditionalDecision: "BLOCK",
    ualaguardDecision: "ALLOW",
    reason: "Usuario digital recurrente con solvencia verificada en tiempo real",
    isFalsePositive: true,
  },
];

export const sampleUsers: UserProfile[] = [
  {
    id: "usr_inf_01",
    name: "María G. (Informal)",
    type: "informal",
    traditionalScore: 320,
    ualaguardScore: 710,
    monthlyIncome: null,
    digitalBehaviorScore: 88,
    paymentConsistency: 94,
    solvencyProofs: 12,
    reclassified: true,
    previousCategory: "Alto Riesgo / Sin Historial",
    newCategory: "Solvente Digital - Tier B",
  },
  {
    id: "usr_dig_02",
    name: "Lucas R. (Digital Nativo)",
    type: "digital",
    traditionalScore: 410,
    ualaguardScore: 780,
    monthlyIncome: null,
    digitalBehaviorScore: 95,
    paymentConsistency: 91,
    solvencyProofs: 18,
    reclassified: true,
    previousCategory: "Sin Score Formal",
    newCategory: "Premium Digital - Tier A",
  },
  {
    id: "usr_inf_03",
    name: "Carlos M. (Cuenta Propia)",
    type: "informal",
    traditionalScore: 280,
    ualaguardScore: 650,
    monthlyIncome: null,
    digitalBehaviorScore: 76,
    paymentConsistency: 87,
    solvencyProofs: 9,
    reclassified: true,
    previousCategory: "Rechazado",
    newCategory: "Solvente Informal - Tier C",
  },
  {
    id: "usr_frm_04",
    name: "Ana P. (Formal)",
    type: "formal",
    traditionalScore: 820,
    ualaguardScore: 835,
    monthlyIncome: 450000,
    digitalBehaviorScore: 70,
    paymentConsistency: 98,
    solvencyProofs: 4,
    reclassified: false,
    previousCategory: "Prime",
    newCategory: "Prime",
  },
];

export const metrics = {
  falsePositiveReduction: 41.3,
  transactionsProcessed: 12847,
  usersReclassified: 3842,
  avgSolvencyLatencyMs: 187,
  portfolioQualityLift: 27.8,
  complianceBlocksAvoided: 5312,
  revenueUnlockedARS: 1890000000,
};
