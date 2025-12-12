import { useAtomValue } from 'jotai';
import {
    annualYieldRateAtom,
    rentToPriceRatioAtom,
    totalPropertyCostAtom,
    monthlyRentAtom // 引入 monthlyRentAtom 以判断是否可以计算租售比
} from '@/state/atoms';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const YieldCalculator = () => {
    const annualYieldRate = useAtomValue(annualYieldRateAtom);
    const rentToPriceRatio = useAtomValue(rentToPriceRatioAtom);
    const totalCost = useAtomValue(totalPropertyCostAtom);
    const monthlyRent = useAtomValue(monthlyRentAtom); // 获取月租金用于条件判断

    // 显示年租金收益率的条件：总成本和年净回报均已计算且有意义
    const canShowYieldRate = totalCost > 0 && annualYieldRate !== "0.00%" && annualYieldRate !== "N/A";

    // 显示租售比的条件：总成本和月租金均已输入且为正
    const canShowRentToPriceRatio = totalCost > 0 && monthlyRent !== null && monthlyRent > 0;


    return (
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-gradient-emphasis bg-clip-text ">
                    投资回报率分析
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4"> {/* 稍微增加间距 */}
                { (canShowYieldRate || canShowRentToPriceRatio) ? (
                    <>
                        {canShowYieldRate && (
                            <div className="text-lg">
                                <span className="font-semibold text-gray-800">年租金收益率:</span>
                                <span className="ml-2 text-2xl font-bold text-green-600">
                                    {annualYieldRate}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    (每年租金回报 / 房产总成本)
                                </p>
                            </div>
                        )}

                        {canShowRentToPriceRatio && (
                             <div className="text-lg">
                                <span className="font-semibold text-gray-800">租售比 (年):</span>
                                <span className="ml-2 text-2xl font-bold text-blue-600">
                                    {rentToPriceRatio}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    (年租金 / 房产总成本)
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-gray-600">
                        请输入房产成本和租金信息以计算相关比率。
                    </p>
                )}
                 {/* 可以考虑添加一个静态的说明区域 */}
                {(totalCost > 0 && (monthlyRent === null || monthlyRent <= 0)) && !canShowYieldRate && (
                     <p className="text-sm text-gray-500">
                        输入月租金后可查看租售比。
                    </p>
                )}
            </CardContent>
        </Card>
    );
};