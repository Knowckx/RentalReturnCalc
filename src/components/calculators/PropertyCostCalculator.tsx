import { useAtom } from 'jotai';
import {
    pricePerSqmAtom,
    totalAreaAtom,
    otherFeesAtom,
    totalPropertyCostAtom,
} from '@/state/atoms';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { InputItem } from './InputItem';

/** 房产的总成本计算 */
export const PropertyCostCalculator = () => {
    const [pricePerSqm, setPricePerSqm] = useAtom(pricePerSqmAtom);
    const [totalArea, setTotalArea] = useAtom(totalAreaAtom);
    const [otherFees, setOtherFees] = useAtom(otherFeesAtom);
    const [totalPropertyCost] = useAtom(totalPropertyCostAtom);

    return (
        <Card className="w-full max-w-md bg-white/70 shadow-lg">
            <CardHeader className="bg-slate-50/70 p-4 rounded-b-lg">
                <div className="text-lg font-semibold text-gray-800">
                    房产总成本:
                    <span className="ml-2 text-xl text-purple-700">
                        ¥{totalPropertyCost.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <InputItem
                    id="pricePerSqm"
                    label="每平米价格"
                    unit="元/㎡"
                    value={pricePerSqm}
                    onChange={setPricePerSqm}
                    placeholder="例如: 20000"
                />
                <InputItem
                    id="totalArea"
                    label="房产总面积"
                    unit="㎡"
                    value={totalArea}
                    onChange={setTotalArea}
                    placeholder="例如: 70"
                />
                <InputItem
                    id="otherFees"
                    label="其他成本"
                    unit="元"
                    value={otherFees}
                    onChange={setOtherFees}
                    placeholder="例如: 税费，装修成本等 150000"
                />
            </CardContent>
        </Card>
    );
};