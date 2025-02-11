import { SectionClimaTempoEstilizado } from "./Styled";

interface PropsSectionClimaTempo {
    children: React.ReactNode
    ariaLabelledy?: string
}

const SectionClimaTempo = ({ children, ariaLabelledy }: PropsSectionClimaTempo) => {
    return (<SectionClimaTempoEstilizado aria-labelledby={ariaLabelledy}>
        {children}
    </SectionClimaTempoEstilizado>)
};

export default SectionClimaTempo;