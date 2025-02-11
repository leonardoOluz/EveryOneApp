import { Suspense } from "react"
import Loader from "../Loader";

interface ISuspenseLazyProps {
    children: React.ReactNode
}

const SuspenseLazy = ({children}: ISuspenseLazyProps) => {
    return <Suspense children={children}  fallback={<Loader/>}/>
};

export default SuspenseLazy;