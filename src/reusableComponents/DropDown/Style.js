import styled, { css } from "styled-components";
import devices from "../../values/const/devices";

export default {
  Div_dropDown: styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ border, theme }) => border || `1px solid ${theme.colors.grey01}`};
    padding: ${({ padding }) => padding || "0.5px 10px"};
    width: ${({ width }) => width || "100%"};
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    text-transform: capitalize;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }
  `,
  Div_default_value_wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  I_chevron_icon: styled.i`
    transition: 0.2s ease-in-out;
    ${({ dropDown }) =>
      dropDown
        ? css`
            transform: rotate(180deg);
          `
        : css`
            transform: rotate(0deg);
          `}
  `,
  Div_dropDown_content: styled.div`
    display: flex;
    /* display: ${({ dropDown }) => (dropDown ? "flex" : "none")}; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    /* bottom: 30px; */
    left: 0;
    width: 100%;
    padding: 0.5rem 0;
    z-index: 3;
    box-shadow: 0 7px 10px -2px rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.colors.grey06};
    background-color: ${({ theme }) => theme.colors.white01};
    transition: 0.2s ease-in-out;
    max-height: 20vh;
    overflow-y: auto;
    ${({ dropDown }) =>
      dropDown
        ? css`
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          `
        : css`
            transform: translateY(10px);
            opacity: 0;
            pointer-events: none;
          `}
    ${({ top }) =>
      top
        ? css`
            top: 20px;
          `
        : css`
            bottom: 30px;
          `}
  `,
  P_item: styled.p`
    transition: 0.3s ease-in-out;
    padding: 0.5rem;
    ${({ item, defaultValue }) =>
      item === defaultValue &&
      css`
        color: ${({ theme }) => theme.colors.accent}!important;
        background: ${({ theme }) => theme.colors.grey02};
      `};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey02};
    }
  `,
};
