import styled from "styled-components";

const InputPesquisaClimaStyled = styled.input`
    all: unset;
    width: 100%;
    padding: 1.7rem 0;    
    border-radius: 0.8rem 0 0 0.8rem;
    text-decoration: none;
    outline-style: none;
    border: 2px solid ${({ theme }) => theme.quinary};
    background-color: #fff;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    
    &::placeholder {
      text-align: left;
      padding-left: 1rem;
    }
    
    @media screen and (min-width: 809px) {
      width: 100%;
      max-width: 350px;
      padding: 0.7rem 0;
  }
`;

interface PropsInputPesquisaClima {
  id: string;
  city: string;
  setCity: (city: string) => void;
}

const InputPesquisaClima = ({ city, setCity, id, ...rest }: PropsInputPesquisaClima) => {
  return (
    <InputPesquisaClimaStyled
      type="text"
      id={id}
      placeholder="Ex: Distrito Federal brasil"
      about="Digite uma cidade"
      value={city}
      onChange={e => setCity(e.target.value)}
      {...rest}
    />
  );
};

export default InputPesquisaClima;