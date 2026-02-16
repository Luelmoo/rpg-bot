export interface Zone {
    name: string;
    id: string;
    tier: number;
    energyCost: number;
    negativeEventProb: number;
    maxDamage: number;
    resources: { id: string; maxAmount: number; probability: number }[];
}
