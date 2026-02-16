import { Resource } from "#interfaces/items";

export const PickaxeResources: Resource[] = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
];
