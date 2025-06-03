import { useAtomValue } from 'jotai';
import {
    annualYieldRateAtom,
    rentToPriceRatioAtom,
    totalPropertyCostAtom, // For conditional rendering
    annualRentalReturnAtom // For conditional rendering
} from '@/state/atoms';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const YieldCalculator = () => {
    const annualYieldRate = useAtomValue(annualYieldRateAtom);
    const rentToPriceRatio = useAtomValue(rentToPriceRatioAtom);
    const totalCost = useAtomValue(totalPropertyCostAtom);
    const annualReturn = useAtomValue(annualRentalReturnAtom);

    const showResults = totalCost > 0 && annualReturn !== 0; // Only show if inputs make sense

    return (
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-gradient-emphasis bg-clip-text text-transparent">
                    3. 投资回报率分析
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {showResults ? (
                    <>
                        <div className="text-lg">
                            <span className="font-semibold text-gray-800">年租金收益率:</span>
                            <span className="ml-2 text-2xl font-bold text-green-600">
                                {annualYieldRate}
                            </span>
                        </div>
                        <div className="text-lg">
                            <span className="font-semibold text-gray-800">出租售比 (年):</span>
                            <span className="ml-2 text-2xl font-bold text-blue-600">
                                {rentToPriceRatio}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                                (年租金净回报 / 房产总成本)
                            </p>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-600">
                        请输入上方数据以计算收益率和出租售比。
                    </p>
                )}
            </CardContent>
        </Card>
    );
};