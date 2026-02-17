import { Resource } from "#interfaces/items.js";

export const PickaxeResources: Record<string, Resource> = {
    MIN_001: {
        id: "MIN_001",
        name: "Fragmento Mineral",
        rarity: "common",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "plate", value: 6 },
        },
        category: "resource",
    },
    MIN_002: {
        id: "MIN_002",
        name: "Cristal Opaco",
        rarity: "rare",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "plate", value: 50 },
        },
        category: "resource",
    },
    MIN_003: {
        id: "MIN_003",
        name: "Núcleo Resonante",
        rarity: "rare",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "plate", value: 65 },
        },
        category: "resource",
    },
    MIN_004: {
        id: "MIN_004",
        name: "Cristal Puro",
        rarity: "common",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "plate", value: 7 },
        },
        category: "resource",
    },
    MIN_005: {
        id: "MIN_005",
        name: "Núcleo Abisal",
        rarity: "epic",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "gold", value: 1 },
        },
        category: "resource",
    },
    MIN_006: {
        id: "MIN_006",
        name: "Fragmento del Abismo",
        rarity: "legendary",
        stackable: true,
        sellable: true,
        buyable: false,
        prices: {
            sell: { coinType: "gold", value: 4 },
        },
        category: "resource",
    },
};
