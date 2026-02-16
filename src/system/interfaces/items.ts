export interface BaseItem {
    id: string;
    name: string;
    rarity: "common" | "rare" | "epic" | "legendary";
    stackable: boolean;
    sellable: boolean;
    buyable: boolean;
    prices?: {
        sell?: { coinType: string; value: number };
        buy?: { coinType: string; value: number };
    };
    amount?: number;
}

export interface Resource extends BaseItem {
    category: "resource";
}

export const RarityMap: Record<
    BaseItem["rarity"],
    { translation: string; emoji: string }
> = {
    common: {
        translation: "Común",
        emoji: "⚪",
    },
    rare: {
        translation: "Raro",
        emoji: "🔵",
    },
    epic: {
        translation: "Épico",
        emoji: "🟣",
    },
    legendary: {
        translation: "Legendario",
        emoji: "🟡",
    },
} as const;

export const rarityOrder: Record<BaseItem["rarity"], number> = {
    common: 0,
    rare: 1,
    epic: 2,
    legendary: 3,
} as const;
