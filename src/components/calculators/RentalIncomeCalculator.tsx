import { useAtom } from 'jotai';
import {
    monthlyRentAtom,
    rentableMonthsAtom,
    annualMaintenanceAtom,
    annualRentalReturnAtom,
} from '@/state/atoms';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { InputItem } from './InputItem';

export const RentalIncomeCalculator = () => {
    const [monthlyRent, setMonthlyRent] = useAtom(monthlyRentAtom);
    const [rentableMonths, setRentableMonths] = useAtom(rentableMonthsAtom);
    const [annualMaintenance, setAnnualMaintenance] = useAtom(annualMaintenanceAtom);
    const [annualRentalReturn] = useAtom(annualRentalReturnAtom);

    return (
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-gradient-emphasis bg-clip-text text-transparent">
                    2. 年租金回报计算
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <InputItem
                    id="monthlyRent"
                    label="月租金 (z1)"
                    unit="元/月"
                    value={monthlyRent}
                    onChange={setMonthlyRent}
                    placeholder="例如: 5000"
                />
                <InputItem
                    id="rentableMonths"
                    label="年稳定出租月数 (z2)"
                    unit="月"
                    value={rentableMonths}
                    defaultValue={10.0} // Handled by atom default, but good for display logic if needed
                    onChange={setRentableMonths}
                    placeholder="例如: 10.0"
                    isFloat={true}
                />
                <InputItem
                    id="annualMaintenance"
                    label="年修缮等费用 (z3)"
                    unit="元/年"
                    value={annualMaintenance}
                    onChange={setAnnualMaintenance}
                    placeholder="例如: 2000"
                />
            </CardContent>
            <CardFooter className="bg-slate-50/70 p-4 rounded-b-lg">
                <div className="text-lg font-semibold text-gray-800">
                    年租金净回报:
                    <span className="ml-2 text-xl text-purple-700">
                        ¥{annualRentalReturn.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};