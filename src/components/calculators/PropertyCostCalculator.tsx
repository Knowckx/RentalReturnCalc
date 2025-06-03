import { useAtom } from 'jotai';
import {
    pricePerSqmAtom,
    totalAreaAtom,
    otherFeesAtom,
    totalPropertyCostAtom,
} from '@/state/atoms';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { InputItem } from './InputItem';

export const PropertyCostCalculator = () => {
    const [pricePerSqm, setPricePerSqm] = useAtom(pricePerSqmAtom);
    const [totalArea, setTotalArea] = useAtom(totalAreaAtom);
    const [otherFees, setOtherFees] = useAtom(otherFeesAtom);
    const [totalPropertyCost] = useAtom(totalPropertyCostAtom);

    return (
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-gradient-emphasis bg-clip-text text-transparent">
                    1. 房产总成本计算
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <InputItem
                    id="pricePerSqm"
                    label="每平米价格 (a1)"
                    unit="元/㎡"
                    value={pricePerSqm}
                    onChange={setPricePerSqm}
                    placeholder="例如: 20000"
                />
                <InputItem
                    id="totalArea"
                    label="房产总面积 (a2)"
                    unit="㎡"
                    value={totalArea}
                    onChange={setTotalArea}
                    placeholder="例如: 90"
                />
                <InputItem
                    id="otherFees"
                    label="其他费用 (a3)"
                    unit="元"
                    value={otherFees}
                    onChange={setOtherFees}
                    placeholder="例如: 装修、税费 150000"
                />
            </CardContent>
            <CardFooter className="bg-slate-50/70 p-4 rounded-b-lg">
                <div className="text-lg font-semibold text-gray-800">
                    房产总成本:
                    <span className="ml-2 text-xl text-purple-700">
                        ¥{totalPropertyCost.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};