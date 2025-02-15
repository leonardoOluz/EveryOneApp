import styled from "styled-components";
import notFoundDesktop from "../../assets/image/NotFound/notFoundDesktop.avif"
import notFoundMobile from "../../assets/image/NotFound/notFoundMobile.avif"
import useWindowSize from "../../hooks/useWindowSize";
import { widthMobile } from "../../styles/IU";

const DivStilizada = styled.div`
  margin-top: 10.09rem;
  padding: 20rem 0;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: ${widthMobile.css}) {
    padding: 5rem 0;
  }
`;

const ImgNotFound = styled.img`
  object-fit: cover;
  max-width: 100%;

  @media screen and (min-width: ${widthMobile.css}) {
    padding: 0.5rem;
    object-fit: fill;
    border: 2px solid ${({ theme }) => theme.secondary};
    border-radius: 555rem;
  }
`;

const NotFound = () => {
  const width = useWindowSize()
  return (
    <DivStilizada>
      <ImgNotFound
        src={width < widthMobile.nb ? notFoundMobile : notFoundDesktop}
        alt="Not Found" />
    </DivStilizada>
  )
};

export default NotFound;