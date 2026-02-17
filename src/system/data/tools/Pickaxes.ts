import { Tool } from "#interfaces/tool.js";

export const PickaxeTools: Tool[] = [
    {
        name: "Pico Rústico",
        id: "pickaxe_t1",
        tier: 1,
        upgrade: {
            levelRequired: 5,
            resources: [
                {
                    id: "MIN_001",
                    amount: 12,
                },
                {
                    id: "MIN_002",
                    amount: 6,
                },
            ],
            goldRequired: 5,
        },
    },
    {
        name: "Pico Resonante",
        id: "pickaxe_t2",
        tier: 2,
        upgrade: {
            levelRequired: 10,
            resources: [
                {
                    id: "MIN_003",
                    amount: 12,
                },
                {
                    id: "MIN_004",
                    amount: 8,
                },
            ],
            goldRequired: 10,
        },
    },
    {
        name: "Pico Abisal",
        id: "pickaxe_t3",
        tier: 3,
    },
];
