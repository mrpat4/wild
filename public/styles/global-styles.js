import { createGlobalStyle, css } from "styled-components";
import ChangeLeftAndRightWithDirection from "utils/ChangeLeftAndRightWithDirection";
import device from "values/const/devices";

// ============================== fonts

const GlobalStyle = createGlobalStyle`


  /* @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 600;
    src: url("../fonts/mabry/mabryPro.otf") format("opentype");
    font-display: swap;
  } */
  
  /* @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 200;
    src: url("../fonts/mabry/mabryProLight.otf") format("opentype");
    font-display: swap;
  }
  
  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/mabry/mabryProMedium.otf") format("opentype");
    font-display: swap;
  }
  
  @font-face {
    font-family: mabry;
    font-style: normal;
    font-weight: bold;
    src: url("../fonts/mabry/mabryProBold.otf") format("opentype");
    font-display: swap;
  } */
  
  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 200;
    src:local('sf'), url("../fonts/sf/sf.otf") format("opentype");
    font-display: swap;
  }
  
  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 200;
    src:local('sf'), url("../fonts/sf/sfLghtt.otf") format("opentype");
    font-display: swap;
  }
  
  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: 400;
    src:local('sf'), url("../fonts/sf/sfMedium.otf") format("opentype");
    font-display: swap;
  }
  
  @font-face {
    font-family: sf;
    font-style: normal;
    font-weight: bold;
    src:local('sf'), url("../fonts/sf/sfBold.otf") format("opentype");
    font-display: swap;
  }
  .font-mabry {
    font-family: mabry;
  }
  /* ------------------------------ pleXmono ---------------------------- */
   @font-face {
    font-family: plexMono;
    font-style: normal;
    font-weight: 100;
    src: url("../fonts/plexMono/IBMPlexMono-ExtraLight.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexMono;
    font-style: normal;
    font-weight: 200;
    src: url("../fonts/plexMono/IBMPlexMono-Light.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexMono;
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/plexMono/IBMPlexMono-Medium.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexMono;
    font-style: normal;
    font-weight: bold;
    src: url("../fonts/plexMono/IBMPlexMono-Bold.ttf") format("trueType");
    /* font-display:swap; */
  }
  /* ------------------------------ pleXSans ---------------------------- */
   @font-face {
    font-family: plexSans;
    font-style: normal;
    font-weight: 100;
    src: url("../fonts/plexSans/IBMPlexSans-ExtraLight.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexSans;
    font-style: normal;
    font-weight: 200;
    src: url("../fonts/plexSans/IBMPlexSans-Light.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexSans;
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/plexSans/IBMPlexSans-Medium.ttf") format("trueType");
    /* font-display:swap; */
  }
  @font-face {
    font-family: plexSans;
    font-style: normal;
    font-weight: bold;
    src: url("../fonts/plexSans/IBMPlexSans-Bold.ttf") format("trueType");
    /* font-display:swap; */
  }
  html,
  body {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    background: white;
   
    ${({ theme }) =>
      theme &&
      theme.direction &&
      css`
        direction: ${theme.direction};
      `}
   
  }


  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    // font: inherit;
    vertical-align: baseline;
    letter-spacing: 0.04rem;
  }
  ul.ba {
    list-style-type: none;
}
ul {
    list-style-position: outside;
}
  body {
    font-family: plexSans;
    font-size: 1rem;
    color: #333;  
  }

  /* body.fontLoaded {
    font-family: sf;
  } */

  #app {

    min-height: 100%;
    min-width: 100%;
    // overflow-x: hidden;

  }
  li::marker {
    display:none !important;
}
  p,
  label {
    /* font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; */
    line-height: 1.5em;
  }
  p{
    font-size:1.125rem;
  }
  label{
    color:${({ theme }) => theme.colors.black04};
    font-weight:400;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
}
button:focus {
  outline: none;
  
}
  textarea:focus, input:focus{
    outline: none;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  *:focus {
    outline: none;
  }

  img {
    max-width: 100%;
    display: flex;
  }

  ol, ul,li {
    list-style: none;
    margin:0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .image-slider-bullets{
    box-shadow : unset !important;
  }


  .carousel .slide{
    background: unset;
    border: 1px solid #e2e5f1;
    border-radius : 5px;
    overflow: hidden;
  }

  .carousel .thumb{
    border: 1px solid #e2e5f1;
    cursor: pointer;
  }

  .carousel .thumb.selected, 
  .carousel .thumb:hover{
    border: 1px solid #ff6839;
    cursor: default;
  }
  
  input, button, textarea, select {
    // font: inherit;
    // color: inherit;
    // padding: 0;
    // margin: 0;
    // border: 0;
    box-sizing: border-box;
    // border-radius: 0;
}

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #selection_bubble{
    display:none;
  }

  .flex-middle{
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .custom-modal-title{
    font-size : 17px;
  }

  .btn {
    font-size : 13px;
  }

  button, input {
    border-radius: 3px;
}

input{
  overflow: hidden !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
*{
  text-align: start;
  border-color:${({ theme }) => theme.colors.grey01};
}

.arrow-down{
  display: block;
  height: 0px;
  width: 0px;
  // position: absolute;
  ${(props) =>
    props.theme &&
    props.theme.direction &&
    css`
             margin-${ChangeLeftAndRightWithDirection(`left`, props.theme.direction)}: 10px;`}
  top: 45%;
  border-top: 4px solid ;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}

// ===============================================================
// ======================== display

.dirColumn{
    display:flex;
    flex-direction: column;
}
.disFlex{
    display:flex;
}
.centerAll{
    display:flex;
    justify-content: center;
    align-items: center;
}
.justify-space-between{
    justify-content: space-between;
}
.alignCenter{
    display:flex;
    align-items: center;
}
.flex1{
    flex:1;
}
.none{
    display: none !important;
  }

// ======================== transition01

.transition01 {
    transition: all 0.1s linear;
}
.transition02 {
    transition: all 0.2s linear;
}
.transitionForOpacity {
    transition:  opacity 300ms ease-in-out 0s;
}

.transition03 {
    transition: all 0.3s linear;
}
.transition04 {
    transition: all 0.4s linear;
}
.transition05 {
    transition: all 0.5s linear;
}
.transition06 {
    transition: all 0.6s linear;
}
.accentBg{
    background: #fff;
}

// ======================== color
.green{
    color: rgb(56, 174, 4);
}
.gray{
    color:#777;
}
.black{
    color:#000;
}
.accentColor{
    color:#ff6839
}
.bgWhite{
    background-color: white;
}
.text-warning{
    color : #ff6839 !important;
  }
// ======================== font
.bold{
    font-weight:bold;
}
.fRem07{
 font-size:0.7rem;
}
.fRem08{
    font-size:0.8rem;
   }
.fRem09{
    font-size:0.9rem;
   }
.fRem1{
    font-size:1rem;
   }
// ======================== margin
.marginStatrtAuto{
    margin-inline-start: auto;
    ${(props) =>
      props.theme &&
      props.theme.direction &&
      css`
        margin-${ChangeLeftAndRightWithDirection(`left`, props.theme.direction)}:  auto;
       `}
}
.marginEndAuto{
    margin-inline-end: auto;
    ${(props) =>
      props.theme &&
      props.theme.direction &&
      css`
        margin-${ChangeLeftAndRightWithDirection(`right`, props.theme.direction)}: auto;
      `}
}
.marginEnd10{
    ${(props) =>
      props.theme &&
      props.theme.direction &&
      css`
        margin-${ChangeLeftAndRightWithDirection(`right`, props.theme.direction)}: 10px;
      `}
    margin-inline-end: 10px;
}
.marginTop10{
    margin-top:10px;
}
.marginBottom10{
    margin-bottom:10px;
}

.width25{
    width:25px;
}

.relative{
    position: relative
}
.zIndex10{
    z-index: 10;

}
.opacity0{
    opacity: 0;
}
.opacity1{
    opacity: 1;
}
// .ripple{
//     width:100px;
//     height:100px;
//     border-radius:50%;
//     background-color:rgba(255,255,255,0.7);
//     position:absolute;
//     trasform:scale(0);
//     animation:ripple 0.6s linear;
// }
// @keyfarmes ripple{
// to{
//     trasform:scale(2.5);
//     opacity:0;
// }
// }
.disBlock{
    display:block
}
.uppercase{
  text-transform:uppercase;
}

/* =-------------------------------------------------------------------- */

.allCategorories{
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
}
.slider-mini-wrapper{
    height: 290px;
    
    @media (max-width: ${device.tablet}px) {
        height: 250px;
      }
      @media (max-width: ${device.mobileL}px) {
        height: 200px;
      }
    .slider-pageination-wrapper{
        bottom: -36px;
        ul{
            li{
                background-color: #d5d5d5;  
             
                width: 23px;
                height: 5px;
    border-radius: 0;
    box-shadow:none
            }
        }
    }
}
.image-slider{
    width: 100%;
    height: 400px;
    position: relative !important;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 5px;
    box-shadow: 1px 1px 6px -1px rgba(0,0,0,0.2);
    background-color: transparent !important;
    @media (max-width: ${device.laptop}px) {
        height: 315px;
      }
    @media (max-width: ${device.showNavigation}px) {
        height: 300px;
      }
      @media (max-width: ${device.tablet}px) {
        height: 250px;
       > div{
           & > button{
            display:none !important;
         
            }
        }    
    
      }
      @media (max-width: ${device.mobileL}px) {
        height: 180px;
      }
    >div{
        width: 100%;
    height: 100%;
        >div{
            >div{
                background-repeat: round;
             }
         }
    }
}
.pointer{
    cursor: pointer;
}
// ======================== display

.dirColumn{
    display:flex;
    flex-direction: column;
}
.disFlex{
    display:flex;
}
.centerAll{
    display:flex;
    justify-content: center;
    align-items: center;
}
.justify-space-between{
    justify-content: space-between;
}
.alignCenter{
    display:flex;
    align-items: center;
}
.flex1{
    flex:1;
}
.none{
    display: none !important;
  }

// ======================== transition01

.transition01 {
    transition: all 0.1s linear;
}
.transition02 {
    transition: all 0.2s linear;
}
.transitionForOpacity {
    transition:  opacity 300ms ease-in-out 0s;
}

.transition03 {
    transition: all 0.3s linear;
}
.transition04 {
    transition: all 0.4s linear;
}
.transition05 {
    transition: all 0.5s linear;
}
.transition06 {
    transition: all 0.6s linear;
}
.accentBg{
    background: #fff;
}

// ======================== color
.green{
    color: rgb(56, 174, 4);
}
.gray{
    color:${({ theme }) => theme.colors.grey06};
}
.black{
    color:#000;
}
.accentColor{
    color:#ff6839
}
.bgWhite{
    background-color: white;
}
.text-warning{
    color : #ff6839 !important;
  }
// ======================== font
.bold{
    font-weight:bold;
}
.fRem07{
 font-size:0.7rem;
}
.fRem08{
    font-size:0.8rem;
   }
.fRem09{
    font-size:0.9rem;
   }
.fRem1{
    font-size:1rem;
   }
// ======================== margin
.marginStatrtAuto{
    margin-inline-start: auto;
      ${({ theme }) =>
        theme.direction &&
        css`
        margin-${ChangeLeftAndRightWithDirection(`left`, theme.direction)}:  auto;
       `}
}
.marginEndAuto{
  margin-inline-end: auto;
  ${({ theme }) =>
    theme.direction &&
    css`
        margin-${ChangeLeftAndRightWithDirection(`right`, theme.direction)}: auto;
      `}
}
.marginEnd10{
  ${({ theme }) =>
    theme.direction &&
    css`
        margin-${ChangeLeftAndRightWithDirection(`right`, theme.direction)}: 10px;
      `}
margin-inline-end: 10px;
}
.marginTop10{
  margin-top: 10px;
}
.marginBottom10{
  margin-bottom: 10px;
}

.width25{
  width: 25px;
}

.relative{
  position: relative
}
.zIndex10{
  z-index: 10;

}
.opacity0{
  opacity: 0;
}
.opacity1{
  opacity: 1;
}
// .ripple{
//     width:100px;
//     height:100px;
//     border-radius:50%;
//     background-color:rgba(255,255,255,0.7);
//     position:absolute;
//     trasform:scale(0);
//     animation:ripple 0.6s linear;
// }
// @keyfarmes ripple{
// to{
//     trasform:scale(2.5);
//     opacity:0;
// }
// }
.disBlock{
  display: block
}



  .error-title{
  font-size: 0.7rem;
  color: #179b58;
  font-weight: 600;
}
  .flex2{
  flex: 2;
}

/* .element-container {
    max-width: 1600px;
    padding:0 88px;
    margin: auto;
} */
  

*{
  box-sizing:border-box;
}
body{
  font-weight:${({ theme }) => theme.font.weight.light};
}
a{
  color:${({ theme }) => theme.colors.black01};
}

h1,h2,h3,h4,h5,h6{
  font-weight:400 !important;
}



`;

export default GlobalStyle;
