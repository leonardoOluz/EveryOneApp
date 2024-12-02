import styled, { keyframes } from "styled-components";

export const ContainerLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderKey = keyframes`
    0% {
    top: .8rem;
    height: 6.4rem;
  }
  50%, 100% {
    top: 2.4rem;
    height: 3.2rem;
  }
`;

export const LdsFacebook = styled.div`
  color: ${({ theme }) => theme.secondary};
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;

  div {
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: .8rem;
    width: 1.6rem;
    background: currentColor;
    animation: ${LoaderKey} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    &:nth-child(1) {
      left: .8rem;
      animation-delay: -0.24s;
    }

    &:nth-child(2) {
      left: 3.2rem;
      animation-delay: -0.12s;
    }

    &:nth-child(3) {
      left: 5.6rem;
      animation-delay: 0s;
    }
  }
`;
