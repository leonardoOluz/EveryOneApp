import { createGlobalStyle, css } from "styled-components";
import { variaveis } from "./IU";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GlobalStyle = createGlobalStyle<{ fontAplic?: boolean }>`
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
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  /* line-height: 1; */
  font-family: ${({ theme, fontAplic }) => {
    if (fontAplic) {
      return theme.fontesFamily;
    }
    return variaveis.fontesFamily.primary;
  }};
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  /* background-color: ${({ theme }) => theme.body}; */
  color: ${({ theme }) => theme.text};
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
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${({theme}) => theme.inside};
  border: 0.5px solid ${({theme}) => theme.border};
  transition: transform 0.4s ease-in-out;
`;

export const ButtonPerson = css`
  right: 10px;
  position: absolute;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${({theme}) => theme.text};
  cursor: pointer;
`;

export default GlobalStyle;
