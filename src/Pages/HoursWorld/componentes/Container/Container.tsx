import styled from "styled-components";

export const Container = styled.div<{$isList: boolean}>`
  flex: 1;
  border: .2rem solid ${({theme}) => theme.secondary}; 
  display: flex;
  align-items: center;
 
  @media screen  and (min-width: 550px){
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    ${({ $isList }) => !$isList && `border-bottom-right-radius: 2rem; border-bottom-left-radius: 2rem;`};
    padding: 0 0 0 2rem;
  }
`;