import { Tipografia } from "../../../../components/Tipografia/Tipografia";
import SectionClimaTempo from "../SectionClimaTempo";
import ClimaFormPesquisa from "./ClimaForm";
import { TituloStyledFormPesquisa } from "./Styled";

const SectionClimaPesquisa = () => {

    return (<SectionClimaTempo>
        <TituloStyledFormPesquisa id="formulario-busca">
            <Tipografia componente="h2" variante="h2" texto="Buscar Cidade" />
        </TituloStyledFormPesquisa>
        <ClimaFormPesquisa />
    </SectionClimaTempo>)
};

export default SectionClimaPesquisa;