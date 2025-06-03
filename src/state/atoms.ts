import { atom } from 'jotai';


// --- 部分1: 房产总花费成本 ---
export const pricePerSqmAtom = atom<number | null>(null); // a1: 每平米价格
export const totalAreaAtom = atom<number | null>(null);   // a2: 房产总面积
export const otherFeesAtom = atom<number | null>(null);   // a3: 其他费用 (装修/税费等)

export const totalPropertyCostAtom = atom<number>((get) => {
    const a1 = get(pricePerSqmAtom);
    const a2 = get(totalAreaAtom);
    const a3 = get(otherFeesAtom);
    if (a1 === null || a2 === null || a3 === null) return 0;
    return a1 * a2 + a3;
});

// --- 部分2: 房产年均租金回报 ---
export const monthlyRentAtom = atom<number | null>(null);             // z1: 月租金
export const rentableMonthsAtom = atom<number| null>(10.0);               // z2: 一年可稳定出租月数 (默认10.0)
export const annualMaintenanceAtom = atom<number | null>(null);       // z3: 一年修缮费用

export const annualRentalReturnAtom = atom<number>((get) => {
    const z1 = get(monthlyRentAtom);
    const z2 = get(rentableMonthsAtom);
    const z3 = get(annualMaintenanceAtom);
    if (z1 === null || z2 === null || z3 === null) return 0; // z2 has a default
    return z1 * z2 - z3;
});

// --- 部分3: 年租金收益率 和 出租售比 ---
export const annualYieldRateAtom = atom<string>((get) => {
    const totalCost = get(totalPropertyCostAtom);
    const annualReturn = get(annualRentalReturnAtom);
    if (totalCost === 0 || annualReturn === 0) return "0.00%"; // 避免除以0或无意义的计算
    const rate = (annualReturn / totalCost) * 100;
    return `${rate.toFixed(2)}%`;
});

// 出租售比通常指 (月租金 / 总房价) 或 (年租金 / 总房价)
// 这里我们用 年租金 / 总房价，与年收益率保持一致性
export const rentToPriceRatioAtom = atom<string>((get) => {
    const totalCost = get(totalPropertyCostAtom);
    const annualReturn = get(annualRentalReturnAtom); // 这里用的是净年回报，也可以用毛年租金 z1*12
    if (totalCost === 0 || annualReturn === 0) return "0.00%";
    const ratio = (annualReturn / totalCost) * 100;
    return `${ratio.toFixed(2)}%`;
});