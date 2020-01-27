import { DefaultTheme, css } from "styled-components";

const myTheme: DefaultTheme = {
  fontSize: "15px",

  colors: {
    main: "cyan",
    secondary: "magenta",
    tertiary: "",
    defaultText: "#000",
    defaultBackgroundCss: css`
      background-color: #2a2a72;
      background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
    `,
    disabled: "#999"
  }
};

export { myTheme };
