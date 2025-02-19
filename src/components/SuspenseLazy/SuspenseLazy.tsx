import { Suspense } from "react"
import EveryOneApp from "../EveryOneApp";

interface ISuspenseLazyProps {
    children: React.ReactNode
}

const SuspenseLazy = ({children}: ISuspenseLazyProps) => {
    return <Suspense children={children}  fallback={<EveryOneApp />}/>
};

export default SuspenseLazy;