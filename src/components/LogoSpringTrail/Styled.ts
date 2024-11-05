import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";

export const Container = styled.div<{displayDirection: string}>`
  display: flex;
  gap: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: ${({displayDirection}) => displayDirection};
  }
`;

export const Box = styled.div<{ widthBox: number; hightBox: number }>`
  position: relative;
  height: ${({ hightBox: h }) => `${h}px`};
  width: ${({ widthBox: w }) => `${w}px`};
`;

export const SharedStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica";
  font-weight: 800;
  backface-visibility: hidden;
`;

export const FrontBox = styled(animated.div)`
  ${SharedStyles}
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
`;

export const BackBox = styled(animated.div)`
  ${SharedStyles}
  background-color: ${({ theme }) => theme.body};
  border: solid 1px ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;
