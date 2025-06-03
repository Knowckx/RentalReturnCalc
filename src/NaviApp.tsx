
import { Calculator, SettingsIcon } from "lucide-react";
import { BottomNavigator } from "infa";
import { TableSetting } from "./components/apps";
import CalcApp from "./RecruitApp";

const tabs = [
    { label: "Calculator", icon: Calculator, component: CalcApp },
    { label: "Settings", icon: SettingsIcon, component: TableSetting },
];


export function NavigatorApp() {
    return (
        <BottomNavigator tabs={tabs} />
    )
}


