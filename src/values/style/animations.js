const { keyframes } = require("styled-components");

export default {
    bottomToTopAnimation: keyframes`
      0% {
       opacity: 0;
       display: none;
       transform: translateY(80px);
    }
     
    100% {
       opacity: 1;
       display: block;
       transform: translateY(0);
    }
    `,
    topToBottomAnimation: keyframes`
     0% {
      opacity: 0;
      display: none;
      transform: translateY(-80px);
   }
    
   100% {
      opacity: 1;
      display: block;
      transform: translateY(0);
   }
   `,
    leftToRightAnimation: keyframes`
     0% {
      opacity: 0;
      display: none;
      transform: translateX(-80px);
   }
    
   100% {
      opacity: 1;
      display: block;
      transform: translateX(0);
   }
   `,
    leftToRightWithBackAnimation: keyframes`
     0% {
      display: none;
      opacity: 0;
      transform: translateX(-10px);
   }
    
   50% {
      display: block;
    opacity: 1;
      transform: translateX(10px);
   }
   10% {
      transform: translateX(0px);
   }
   `,
    scaleShowAnimation: keyframes`
    0% {
   opacity: 0;
   display: none;
   transform: scale(0);
   }
 
  100% {
   opacity: 1;
   display: block;
   transform: scale(1);
   }
`,
    opacityShowAnimation: keyframes`
    0% {
   opacity: 0;
   }
 
  100% {
   opacity: 1;
   }
`,
}
