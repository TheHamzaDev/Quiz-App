import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/fonts/Poppins-Medium.ttf"

export const FontStyle = createGlobalStyle`
  @font-face {
  font-family: 'Poppins';
  src: url(${Poppins}) format('truetype'),
}
`;
