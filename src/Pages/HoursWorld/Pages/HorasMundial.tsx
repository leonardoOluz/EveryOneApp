import styled from "styled-components";
import useGetTimeZoneContext from "../hooks/useGetTimeZoneContext";
import BuscarFusoHorario from "../componentes/BuscarFusoHorario/BuscarFusoHorario";
import { Tipografia } from "../../../components/Tipografia/Tipografia";
import Relogio from "../componentes/Relogio/Relogio";
import { setDateHoursMinute } from "../../../utils/dateTransform";
import Loader from "../../../components/Loader";

const HorasMundialEstilizada = styled.section`
  margin: 15.4rem 0 10.3rem 0;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  color: ${({ theme }) => theme.secondary};

  @media screen and (min-width: 550px){
    margin-top: 11.3rem ;
  }

`;
const HorasMundial = () => {
  const { pegarTexto, getTimeZone, isLoading } = useGetTimeZoneContext();

  return (<>
    {isLoading && getTimeZone.countryName ? <Loader /> :
      <HorasMundialEstilizada id="relogio">
        <BuscarFusoHorario pegarTextLocal={pegarTexto} />
        <div>
          <Tipografia componente="h2" variante="h2" texto={getTimeZone.countryName} />
          <Tipografia
            componente="body"
            variante="h3"
            texto={getTimeZone.zoneName + " " + setDateHoursMinute(getTimeZone.formatted)} />
        </div>
        <Relogio />
        <Tipografia componente="h2" variante="h2" texto="Relogio Mundial" />
      </HorasMundialEstilizada>
    }
  </>
  )
};

export default HorasMundial;