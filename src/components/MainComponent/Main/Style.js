import styled, { keyframes } from "styled-components";
import devices from "values/const/devices";

export const MoveAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  
  33%{
    transform: translateX(100%);

  }
  66%{
    transform: translateX(-100%);
    opacity:0;

  }

100% {
    transform: translate(0);
    opacity:1;
  }
`;

export default {
  Div_slider_wrapper: styled.div`
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: 100vh;
    z-index: -100;
    background: url(placeholder.jpg) no-repeat;
    background-size: cover;
    position: relative;
    /* overflow: hidden; */
    display: block;
    line-height: 0;
    cursor: grab;
    z-index: 3;
    &:active {
      cursor: grabbing;
    }
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: -100;
      background: black;
      background-size: contain;
    }
  `,
  Div_main: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background: url(placeholder.jpg) no-repeat;
    background-size: cover;
    z-index: 1;
    video#heroVideo {
      min-width: 100%;
      min-height: 100%;
      z-index: -100;
      background: black;
      background-size: contain;
    }
  `,

  Div_text: styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);
    z-index: 1;
    .title {
      font-size: ${({ theme }) => theme.font.size.fs14};
      text-transform: uppercase;
      font-weight: 300;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        display: inline-block;
        margin-right: 0.5rem;
        opacity: 0.6;
      }
    }
    .desc {
      font-size: 3.8rem;
      max-width: 50%;
      line-height: normal;
      margin: 1rem 0 1.5rem -5px;
    }
    .btn {
      font-size: ${({ theme }) => theme.font.size.fs14};
      font-weight: 300;
      color: ${({ theme }) => theme.colors.white01};
      display: inline-flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      &:hover {
        i {
          /* animation: ${MoveAnimation} 0.2s ease forwards; */
          margin-left: 1rem;
        }
      }
      p {
        font-size: ${({ theme }) => theme.font.size.fs14};
      }
      i {
        font-size: ${({ theme }) => theme.font.size.fs20};
        opacity: 0.6;
        margin-left: 0.5rem;
        transition: 0.2s ease;
      }
    }
    @media (max-width: ${devices.tablet}px) {
      left: 20px;
      top: 70%;
      .desc {
        font-size: 2rem;
        max-width: 99%;
        margin-left: 0;
      }
    }
  `,
};
