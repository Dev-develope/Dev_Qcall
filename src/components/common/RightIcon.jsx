import { CheckCircle } from "lucide-react";

export function RightIcon() {
    return (<>
        <div className="bg-[#00a7e6] p-2 h-12 w-12 flex justify-center items-center rounded-full text-white">
            <CheckCircle />
        </div>
    </>)
}

export function CrossIcon() {
    return (<>
        <div className="bg-red-500 p-2 h-12 w-12 flex justify-center items-center rounded-full text-white">
            <CrossIcon />
        </div>
    </>)
}