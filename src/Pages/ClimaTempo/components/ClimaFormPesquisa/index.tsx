import SectionClimaTempo from "../SectionClimaTempo";
import ClimaFormPesquisa from "./ClimaForm";
import { TituloStyledFormPesquisa } from "./Styled";

const SectionClimaPesquisa = () => {

    return (<SectionClimaTempo>
        <TituloStyledFormPesquisa id="formulario-busca">Buscar Cidade</TituloStyledFormPesquisa>
        <ClimaFormPesquisa />
    </SectionClimaTempo>)
};

export default SectionClimaPesquisa;