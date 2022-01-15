import { css } from "styled-components";
export const fontFaces = css`
  // @font-face {
  //   font-family: 'OurFont';
  //   src: url(${myFontURL}) format('woff2');
  //   font-weight: ${fontWeight.bold};
  //   font-style: normal;
  // }
  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 600;
    src: url("./mabry/mabryPro.otf") format("opentype");
  }

  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 200;
    src: url("./mabry/mabryProLight.otf") format("opentype");
  }

  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 400;
    src: url("./mabry/mabryProMedium.otf") format("opentype");
  }

  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: bold;
    src: url("./mabry/mabryProBold.otf") format("opentype");
  }

  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 200;
    src: url("./sf/sf.otf") format("opentype");
  }

  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 200;
    src: url("./sf/sfLghtt.otf") format("opentype");
  }

  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 400;
    src: url("./sf/sfMedium.otf") format("opentype");
  }

  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: bold;
    src: url("./sf/sfBold.otf") format("opentype");
  }
  /*  ----------------------- graphik --------------------------------- */
  @font-face {
    font-family: graphik;
    font-style: normal;
    font-weight: 100;
    src: url("./graphik/graphik-ExtraLight.otf") format("opentype");
  }
  @font-face {
    font-family: graphik;
    font-style: normal;
    font-weight: 200;
    src: url("./graphik/graphik-Light.otf") format("opentype");
  }
  @font-face {
    font-family: graphik;
    font-style: normal;
    font-weight: 400;
    src: url("./graphik/graphik-Medium.otf") format("opentype");
  }
  @font-face {
    font-family: graphik;
    font-style: normal;
    font-weight: bold;
    src: url("./graphik/graphik-Bold.otf") format("opentype");
  }
`;
