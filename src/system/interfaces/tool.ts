export interface Tool {
    name: string;
    id: string;
    tier: number;
    upgrade?: {
        levelRequired: number;
        resources: { id: string; amount: number }[];
        goldRequired: number;
    };
}
