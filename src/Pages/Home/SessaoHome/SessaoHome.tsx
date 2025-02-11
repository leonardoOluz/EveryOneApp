import styled from "styled-components";

const SessaoHome = styled.section`
  padding: 13.5rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.primary};
  
  .linksDotLottieReact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    padding: 1.5rem;
    color: ${({ theme }) => theme.quinary};
    transition: transform 200ms ease-in-out;
    .lottieReact {
      max-width: 12rem;
      max-height: 12rem;
      
      @media screen and (min-width: 550px){
        max-width: 30rem;
        max-height: 30rem;
      }
    }

    @media screen and (min-width: 550px){
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default SessaoHome;