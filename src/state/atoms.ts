import { atom } from 'jotai';

// --- 部分1: 房产总花费成本 ---
export const pricePerSqmAtom = atom<number | null>(null); // a1: 每平米价格
export const totalAreaAtom = atom<number | null>(null);   // a2: 房产总面积
export const otherFeesAtom = atom<number | null>(null);   // a3: 其他费用 (装修/税费等)

export const totalPropertyCostAtom = atom<number>((get) => {
    const a1 = get(pricePerSqmAtom);
    const a2 = get(totalAreaAtom);
    const a3 = get(otherFeesAtom);
    if (a1 === null || a2 === null || a3 === null || a1 < 0 || a2 < 0 || a3 < 0) return 0; // 确保输入有效
    return a1 * a2 + a3;
});

// --- 部分2: 房产年均租金回报 ---
export const monthlyRentAtom = atom<number | null>(null);             // z1: 月租金
export const rentableMonthsAtom = atom<number>(10.0);               // z2: 一年可稳定出租月数 (默认10.0)
export const annualMaintenanceAtom = atom<number | null>(null);       // z3: 一年修缮费用

export const annualRentalReturnAtom = atom<number>((get) => {
    const z1 = get(monthlyRentAtom);
    const z2 = get(rentableMonthsAtom);
    const z3 = get(annualMaintenanceAtom);
    if (z1 === null || z3 === null || z1 < 0 || z2 < 0 || z3 < 0) return 0; // 确保输入有效
    return z1 * z2 - z3;
});

// --- 部分3: 年租金收益率 和 租售比 ---
export const annualYieldRateAtom = atom<string>((get) => {
    const totalCost = get(totalPropertyCostAtom);
    const annualReturn = get(annualRentalReturnAtom);
    if (totalCost === 0 || annualReturn === 0) return "0.00%";
    if (totalCost <= 0) return "N/A"; // 避免总成本为0或负数时计算
    const rate = (annualReturn / totalCost) * 100;
    return `${rate.toFixed(2)}%`;
});

// 租售比 (年毛租金 / 房产总成本)
// 年毛租金 = 月租金 * 12
export const rentToPriceRatioAtom = atom<string>((get) => {
    const totalCost = get(totalPropertyCostAtom);
    const monthlyRent = get(monthlyRentAtom);

    if (totalCost === null || totalCost <= 0 || monthlyRent === null || monthlyRent <= 0) {
        return "0.00%";
    }

    const annualGrossRent = monthlyRent * 12;
    const ratio = (annualGrossRent / totalCost) * 100;
    return `${ratio.toFixed(2)}%`;
});