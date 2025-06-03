import React from "react";

interface CenterAppProps {
    isShow?: boolean
    comp: React.FC
}

const CenterApp: React.FC<CenterAppProps> = ({ isShow, comp: Comp }) => {
    if (isShow === false) return null;
    return (
        <div className="flex items-center justify-center">
            <div className="bg-lightblue w-52 h-24 text-center">
                <Comp />
            </div>
        </div>
    )
}

const TodoSettingsComponent: React.FC = () => (
    <div>Todo.. Settings..</div>
);

export const TableSetting: React.FC = () => <CenterApp comp={TodoSettingsComponent} />;
