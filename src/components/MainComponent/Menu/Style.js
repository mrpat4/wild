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
    background-color: ${({ theme }) => theme.colors.white01};
    padding: 6rem 4.5rem 0 4.5rem;
    z-index: 3;
    transform: translateY(-100%);
    pointer-events: none;
    transition: 0.2s ease-in-out;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: translateY(0);
        transition: 0.3s ease-in-out;
        pointer-events: auto;
      `}
    @media (max-width: ${devices.tablet}px) {
      padding: 6rem 2rem 0 2rem;
    }
  `,

  Div_menu_inner: styled.div`
    border-top: 1px solid #e9e9e9;
    /* border-bottom: 1px solid #e9e9e9; */
    opacity: 0;
    transition: 0.1s ease-in-out;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        opacity: 1;
        transition: 1s ease-in-out;
      `}
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      li {
        flex: 0 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e9e9e9;
        text-transform: capitalize;
        @media (max-width: ${devices.tablet}px) {
          flex-basis: 100%;
        }

        a {
          font-size: 2.5rem;
          line-height: 1.3;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px;
          @media (max-width: ${devices.tablet}px) {
            padding: 3.5rem 0 1.5rem 0;
            font-size: 1.5rem;
            div {
              text-align: center;
            }
          }
          &:hover {
            .hovered-text {
              opacity: 1;
              user-select: auto;
            }
          }

          .hovered-text {
            opacity: 0;
            user-select: none;
            position: relative;
            display: block;
            font-size: 1rem;
            line-height: 1.4;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s ease-in-out;
            &:before {
              content: "";
              transform: translateY(10%);
              margin-right: 0.5rem;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #111;
            }
          }
        }
      }
    }
  `,

  Div_footer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    opacity: 0;
    transition: 0.1s ease-in-out;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        opacity: 1;
        transition: 1s ease-in-out;
      `}
  `,
  Div_privacy: styled.div`
    a {
      margin-right: 1.5rem;
      color: ${({ theme }) => theme.colors.grey02};
      font-size: 14px;
      transition: 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.black01};
      }
    }
  `,

  Div_social: styled.div`
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin-right: 1rem;
        font-size: 13px;
        &:last-child {
          margin-right: 0;
        }
        a {
          transition: 0.2s ease;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  `,
};
