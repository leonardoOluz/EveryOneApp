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
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

export const LdsFacebook = styled.div`
  color: ${({ theme }) => theme.inside};
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: currentColor;
    animation: ${LoaderKey} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    &:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }

    &:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }

    &:nth-child(3) {
      left: 56px;
      animation-delay: 0s;
    }
  }
`;
