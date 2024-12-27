import { ClimaHojeListaEstilizada } from "./Styled";

interface PropsClimaHojeList {
    children: React.ReactNode;
    ariaLabel?: string
}

const ClimaHojeList = ({children, ariaLabel}: PropsClimaHojeList) => {
    return(<ClimaHojeListaEstilizada aria-label={ariaLabel}>
        {children}
    </ClimaHojeListaEstilizada>)
};

export default ClimaHojeList;