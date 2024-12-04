import { createGlobalStyle, css, keyframes } from "styled-components";
import { styledVariable } from "./IU";

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: ${styledVariable.fontesFamily.secundary};
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.quinary};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const MainPerson = css`
  position: fixed;
  left: 0;
  right: 0;
  padding: 3.2rem;
  display: flex;
  z-index: 1;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 3.2rem 1.6rem;
  }
`;

export const ButtonPerson = css`
  right: 1rem;
  position: absolute;
  width: 10rem;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.quinary};
  cursor: pointer;
`;

/* KeyFrames utils */
export const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(5px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* css animations */
export const show = css`
  opacity: 1;
  transform: translateY(0);
`;

export default GlobalStyle;
