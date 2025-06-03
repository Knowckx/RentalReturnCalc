import { TipMsgAtom } from "infa";
import { useAtom } from "jotai";
import { Button } from "./ui/button";


export const KlineStructApp: React.FC = () => {
    return (
        <div className="h-full text-center font-bold text-2xl flex flex-col">
            <div className='bg-gray-100 h-12' data-note='备注'>  标题 </div>
            <div className='flex flex-row bg-blue-100 h-full justify-center items-center' data-note='main内容'>
                <div className='flex flex-col h-full bg-gray-200 w-85/100 justify-center items-center' data-note='两个图表'> 
                    <div className='bg-blue-100 w-full h-4/5 flex flex-col justify-center items-center' data-note='图表1'> 
                        <div>图形1</div>
                        <AddTipMsgDemo />
                    </div>
                    <div className='bg-blue-200 w-full h-1/5 flex flex-col justify-center items-center' data-note='图表2'> 
                        图形2
                    </div>
                </div>
                <div className='h-full bg-gray-300 w-15/100 flex justify-center items-center' data-note='5档数据'> 
                    <span>5档数据</span> 
                </div>
            </div>
        </div>
    );
}

function AddTipMsgDemo() {
    const [, setTips] = useAtom(TipMsgAtom);
    const handleAddMsg = () => {
        setTips({ 
            desc: "好高兴看到你", 
            actionLabel: "行动一下", actionFn: () => console.log(`行动一下-打印数据`)
        })
    }
    return (
        <div className='text-center font-bold text-1xl' data-note='备注'> 
            <Button variant={"secondary"} onClick={handleAddMsg}> ShowTips </Button>
        </div>
    )
}