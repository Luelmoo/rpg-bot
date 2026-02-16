import { Zone } from "#interfaces/zone";

export const PickaxeZones: Record<string, Zone> = {
    mine_t1: {
        name: "Cavernas Quebradas",
        id: "mine_t1",
        tier: 1,
        energyCost: 5,
        negativeEventProb: 20,
        maxDamage: 3,
        resources: [
            {
                id: "MIN_001",
                maxAmount: 3,
                probability: 70,
            },
            {
                id: "MIN_002",
                maxAmount: 1,
                probability: 30,
            },
        ],
    },
    mine_t2: {
        name: "Minas Resonantes",
        id: "mine_t2",
        tier: 2,
        energyCost: 10,
        negativeEventProb: 25,
        maxDamage: 6,
        resources: [
            {
                id: "MIN_003",
                maxAmount: 1,
                probability: 40,
            },
            {
                id: "MIN_004",
                maxAmount: 2,
                probability: 45,
            },
            {
                id: "MIN_001",
                maxAmount: 1,
                probability: 15,
            },
        ],
    },
    mine_t3: {
        name: "Grieta Magmática",
        id: "mine_t3",
        tier: 3,
        energyCost: 15,
        negativeEventProb: 35,
        maxDamage: 12,
        resources: [
            {
                id: "MIN_005",
                maxAmount: 1,
                probability: 30,
            },
            {
                id: "MIN_006",
                maxAmount: 1,
                probability: 8,
            },
            {
                id: "MIN_003",
                maxAmount: 1,
                probability: 40,
            },
        ],
    },
};
