import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import devices from "values/const/devices";

export const MoveAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  
  33%{
    transform: translateX(-100%);

  }
  66%{
    transform: translateX(100%);
    opacity:0;

  }

100% {
    transform: translate(0);
    opacity:1;
  }
`;

export default {
  Div_header_wrapper: styled(motion.div)`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
    ${({ routerPath }) =>
      routerPath &&
      css`
        position: relative;
      `}
    ${({ isAboutPage }) =>
      isAboutPage &&
      css`
        /* background-color: ${({ theme }) => theme.colors.black01}; */
      `}
  `,
  Div_header_container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 89%;
    margin: 0 auto;
    padding: 2.3rem 0;
    a {
      display: flex;
      align-items: center;
    }
  `,
  Div_left_part: styled.div`
    display: flex;
    align-items: center;
    .overview-wrapper {
      position: relative;
      margin-left: 2rem;
      margin-top: 0.2rem;
      @media (max-width: ${devices.tablet}px) {
        margin-left: 0.5rem;
      }
      &:before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 1px;
        height: 24px;
        background-color: #e9e9e9;
      }
    }
    .overview {
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      margin-left: 1.5rem;
      @media (max-width: ${devices.tablet}px) {
        margin-left: 0.5rem;
        p {
          font-size: ${({ theme }) => theme.font.size.fs13};
        }
      }

      &:hover {
        i {
          animation: ${MoveAnimation} 0.2s ease forwards;
        }
      }
    }
    .arrow {
      width: 20px;
      height: 20px;
      border: 1px solid ${({ theme }) => theme.colors.black02};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
      overflow: hidden;
      @media (max-width: ${devices.tablet}px) {
        width: 17px;
        height: 17px;
      }

      i {
        font-size: ${({ theme }) => theme.font.size.fs11};
        @media (max-width: ${devices.tablet}px) {
          font-size: ${({ theme }) => theme.font.size.fs10};
        }
      }
    }
  `,
  Div_title_wrapper: styled.div`
    /* color: ${({ theme }) => theme.colors.white01}; */

    color: ${({ theme }) => theme.colors.white01};
    font-size: ${({ theme }) => theme.font.size.fs12};
    font-family: plexMono;
    transition: 0.2s ease;

    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        color: ${({ theme }) => theme.colors.black01};
      `}
    ${({ routerPath }) =>
      routerPath &&
      css`
        color: ${({ theme }) => theme.colors.black01};
      `}
      ${({ isAboutPage }) =>
      isAboutPage &&
      css`
        color: ${({ theme }) => theme.colors.white01};
      `}
      ${({ searchMenuIsOpen }) =>
      searchMenuIsOpen &&
      css`
        color: ${({ theme }) => theme.colors.white01};
      `}
    &:hover {
      opacity: 0.6;
    }
  `,
  Div_right_part: styled.div`
    display: flex;
    color: #fff;

    .menu-items {
      margin-right: 0;
    }
  `,
  Div_header_item: styled.div`
    font-size: ${({ theme }) => theme.font.size.fs12};
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    margin-right: 4rem;

    @media (max-width: ${devices.tablet}px) {
      &:first-child {
        margin-right: 2rem;
      }
    }

    &:hover {
      .burger__bun--first {
        transform: matrix(1, 0, 0, 1, 0, 1);
      }
      .burger__bun--last {
        transform: matrix(1, 0, 0, 1, 0, -1);
      }
      .close {
        transform: scale(0.88);
      }
    }
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        color: #111;
      `}
    ${({ routerPath }) =>
      routerPath &&
      css`
        color: #111;
      `}
      ${({ isAboutPage }) =>
      isAboutPage &&
      css`
        color: ${({ theme }) => theme.colors.white01};
      `}
      ${({ searchMenuIsOpen }) =>
      searchMenuIsOpen &&
      css`
        color: ${({ theme }) => theme.colors.white01};
      `}
    span:first-child {
      padding-top: 0.3rem;
    }
    .search {
      @media (max-width: ${devices.tablet}px) {
        display: none;
      }
    }
    .menu {
      @media (max-width: ${devices.tablet}px) {
        display: none;
      }
    }

    svg {
      stroke: #fff;
      margin-right: 0.5rem;
      position: absolute;
      left: -20px;
      top: 5px;
      ${({ menuIsOpen }) =>
        menuIsOpen &&
        css`
          stroke: #111;
        `}
      ${({ routerPath }) =>
        routerPath &&
        css`
          stroke: #111;
        `}
        ${({ isAboutPage }) =>
        isAboutPage &&
        css`
          stroke: ${({ theme }) => theme.colors.white01};
        `}
        ${({ searchMenuIsOpen }) =>
        searchMenuIsOpen &&
        css`
          stroke: #fff;
        `}
    }
    .close,
    .close-menu {
      font-size: 17px;
      margin-right: 0.5rem;
      /* margin-bottom: 6px; */
      display: inline-block;
      position: absolute;
      left: -20px;
      top: -3px;
    }
  `,
};
