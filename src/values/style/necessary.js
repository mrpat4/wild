import { css } from "styled-components";
import ChangeLeftAndRightWithDirection from "utils/ChangeLeftAndRightWithDirection";
import device from "../const/devices";
import "simplebar/dist/simplebar.min.css";

const necessary = `
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
        margin-${ChangeLeftAndRightWithDirection(
      `left`,
      theme.direction
    )}:  auto;
       `}
}
.marginEndAuto{
  margin - inline - end: auto;
  ${({ theme }) =>
    theme.direction &&
    css`
        margin-${ChangeLeftAndRightWithDirection(
      `right`,
      theme.direction
    )}: auto;
      `}
}
.marginEnd10{
  ${({ theme }) =>
    theme.direction &&
    css`
        margin-${ChangeLeftAndRightWithDirection(
      `right`,
      theme.direction
    )}: 10px;
      `}
margin - inline - end: 10px;
}
.marginTop10{
  margin - top: 10px;
}
.marginBottom10{
  margin - bottom: 10px;
}

.width25{
  width: 25px;
}

.relative{
  position: relative
}
.zIndex10{
  z - index: 10;

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


}
.btns {
  display: flex;
  align - items: center;
  justify - content: center;
  min - width: 90px;
  margin: 6px 3px;
  font - size: 1rem;
  border - radius: 0.4167rem;
  font - weight: 500;
  padding: 0.5rem 1.13rem;
  box - shadow: none;
  user - select: none;
  color: white!important;
  text - align: center;
  cursor: pointer;
  border: 1px solid transparent;
    &: hover {
    -webkit - box - shadow: var(--boxShadowLow);
    box - shadow: var(--boxShadowLow);
  }
}
  .btns - primary {
  background - color: var(--prymaryColor);
  @include transition(0.2s, linear);
    &: hover {
    background - color: var(--blueLight3);
  }
}
  .btns - primary.btns - gradient {
  background: #07a7e3;
  background: -webkit - linear - gradient(-45deg, #07a7e3, #32dac3);
  background: -webkit - linear - gradient(315deg, #07a7e3, #32dac3);
  background: -o - linear - gradient(315deg, #07a7e3 0, #32dac3 100 %);
  background: linear - gradient(135deg, #07a7e3, #32dac3);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = $qp - color - 1, endColorstr = $qp - color - 2, GradientType = 1);
}
  .btns - warning {
  background - color: #ffc107;
  @include transition(0.2s, linear);
    &: hover {
    background - color:  #e0a800;
  }
}
  .btns - success {
  background - color: #28a745;
  @include transition(0.2s, linear);
    &: hover {
    background - color: var(--successColorHover);
  }
}
  .btns - danger {
  background - color: var(--dangerColor);
  @include transition(0.2s, linear);
    &: hover {
    background - color: var(--dangerColorHover);
  }
}
  .btns - add {
  background - color: var(--addColor);
  @include transition(0.2s, linear);
    &: hover {
    background - color: var(--addColorHover);
  }
}
  .error - title{
  font - size: 0.7rem;
  color: #179b58;
  font - weight: 600;
}
  .flex2{
  flex: 2;
}

`;

export default necessary;
// background-color: #f7f7fa;
// background-image: linear-gradient(90deg,#f7f7fa,#e2e5f1,#f7f7fa);
// background-size: 200px 100%;
// background-repeat: no-repeat;
// -webkit-animation: loadingAnimation-jsx-194994594 1.5s infinite;
// animation: loadingAnimation-jsx-194994594 1.5s infinite;
// 0% {
//     background-position: -200px 0;
// }
// 100% {
//     background-position: calc(200px + 100%) 0;
// }
