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
    padding: 1.9rem 4.5rem 0 4.5rem;
    z-index: 4;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: translateY(0);
        transition: 0.3s ease-in-out;
      `}
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
      /* margin: 0 auto; */
      padding: 1rem;
    }
  `,

  Div_menu_inner: styled.div`
    opacity: 0;
    transition: 0.1s ease-in-out;
    width: 100%;

    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        opacity: 1;
        transition: 1s ease-in-out;
      `}
  `,
  Div_top_menu: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99%;
    margin: auto;
    margin-bottom: 3.2rem;
    .progressBar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.2s ease;
      /* border: 1.5px solid red; */
      overflow: "hidden";
      position: relative;
      .progress {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        z-index: 1;
        circle {
          transition: stroke-dashoffset 0.3s ease 0.3s;
        }

        position: absolute;
      }
      img {
        width: 85%;
        height: 85%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .close-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.black01};
      color: ${({ theme }) => theme.colors.white01};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        transform: scale(1.1);
      }

      i {
        font-size: ${({ theme }) => theme.font.size.fs17};
      }
    }
  `,

  Div_progress_wrapper: styled.div`
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      @media (max-width: ${devices.tablet}px) {
        display: none;
      }
    }
  `,

  Div_slider_container: styled.div`
    width: 100%;
    height: 100%;

    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        margin: 1rem;
      `}
    .swiper-slide {
      opacity: 0.3;
      transition: opacity 0.5s ease, transform 0.3s ease;
      transform: scale(0.9);
    }
    .swiper-slide-active {
      transition: opacity 0.5s ease, transform 0.3s ease;
      opacity: 1;
      transform: scale(1);
    }
    img,
    video {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  `,
};
