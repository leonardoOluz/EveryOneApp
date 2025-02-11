import styled from "styled-components";

const BtnPrimary = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    padding: 0.4rem;
    border-radius: 55rem;
    color: ${({ theme }) => theme.quinary};
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    &:hover {
      border: 2px solid ${({ theme }) => theme.quinary};
    }
  }
`;

const BtnSecundary = styled.button`
  position: absolute;
  inset: 0;
  bottom: auto;
  top: 9.5rem;
  margin: 0 auto;
  height: 3rem;
  background-color: ${({ theme }) => theme.tertiary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
  text-align: center;
`;

interface IBotaoProps {
  children: React.ReactNode | string;
  ariaLabel: string;
  titulo: string;
  id: string;
  tipo: "button" | "submit" | "reset";
  onClick: () => void;
  tipoButton: "primario" | "secundario";
}
const Botao = ({ ariaLabel, children, titulo, tipo, id, onClick, tipoButton }: IBotaoProps) => {
  
  if(tipoButton === "primario"){
    return <BtnPrimary
    aria-label={ariaLabel}
    title={titulo}
    type={tipo}
    id={id}
    onClick={onClick}
  >
    {children}
  </BtnPrimary>  
  }
  if(tipoButton === "secundario"){
  return <BtnSecundary
    aria-label={ariaLabel}
    title={titulo}
    type={tipo}
    id={id}
    onClick={onClick}
  >
    {children}
  </BtnSecundary>
  } 

};

export default Botao;