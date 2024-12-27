import styled from "styled-components";

export const SectionImagemAtual = styled.section<{
  imagem: string;
  toggleColor: boolean;
}>`
  background-image: ${({ imagem }) => `url(${imagem})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 0;
  ${({ toggleColor, theme }) =>
    toggleColor ? "color: white" : `color: ${theme.quinary}`}

  box-sizing: border-box;
  @media screen and (min-width: 809px) {
    width: 90%;
  }
`;

export const ContainerTituloLocalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 2.4rem;
  padding: 0.5rem 1.6rem;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;
/* Criado o sub-titulo no tipografia */
export const SubTituloStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeTitle};
  box-sizing: border-box;
`;
/* Criado o texto no tipografia */
export const TextoStilizado = styled.p`
  font-size: ${({ theme }) => theme.fontSizeBig};
`;

export const ContainerWeatherNow = styled.div<{ textColor: boolean }>`
  display: flex;
  justify-content: start;
  ${({ textColor, theme }) =>
    textColor ? `color:${theme.white}` : `color:${theme.black}`};
`;
