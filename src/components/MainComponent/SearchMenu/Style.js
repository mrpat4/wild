import styled, { css } from "styled-components";
import devices from "values/const/devices";

export default {
  Div_menu_container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black01};
    color: ${({ theme }) => theme.colors.white01};
    /* padding: 6rem 4.5rem 0 4.5rem; */
    padding-top: 6rem;
    padding-bottom: 6rem;
    z-index: 3;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
    overflow-y: scroll;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: translateY(0);
        transition: 0.3s ease-in-out;
      `}
    form {
      border-bottom: 1px solid #1d1d1d;
      margin-bottom: 50px;
    }
    input {
      width: 89%;
      margin: auto;
      border: none;
      color: #fff;
      background: transparent;
      font-size: 100px;
      display: block;
      margin: 70px auto 40px;
      white-space: nowrap;
      border-radius: 3px;
      &:active,
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #1d1d1d;
      }
      @media (max-width: ${devices.tablet}px) {
        background-color: #1d1d1d;
        font-size: 1rem;
        padding: 1.4rem 0.5rem;
        width: 90%;
        &::placeholder {
          color: #777;
        }
      }
    }
  `,

  Div_menu_inner: styled.div`
    opacity: 0;
    transition: 0.1s ease-in-out;
    width: 89%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.white01};
    column-count: 3;
    column-gap: 60px;
    @media (max-width: ${devices.tablet}px) {
      column-count: 1;
    }
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        opacity: 1;
        transition: 1s ease-in-out;
      `}
    p {
      text-transform: capitalize;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 2rem;
      transition: 0.2s ease;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      &:before {
        content: "\f1dd";
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Pro";
        font-size: 30px;
        margin-right: 0.7rem;
      }
      @media (max-width: ${devices.tablet}px) {
        &:before {
          display: none;
        }
      }
    }
    ul {
      margin-left: 2.5rem;
      margin-bottom: 2rem;
      @media (max-width: ${devices.tablet}px) {
        margin-left: 0;
      }
    }
    li {
      a {
        line-height: 2rem;
        color: ${({ theme }) => theme.colors.white01};
        font-weight: 200;
        transition: 0.2s ease;
        &:hover {
          opacity: 0.6;
        }
        .code {
          margin-right: 1rem;
          text-transform: capitalize;

          &:before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            background-color: ${({ theme }) => theme.colors.white01};
            margin-right: 0.5rem;
          }
        }
        .title {
          text-transform: lowercase !important;
        }
        span::first-letter {
          text-transform: capitalize !important;
        }
      }
    }
  `,
};
