import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_contact_container: styled(motion.div)``,

  Div_header: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10rem;
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 2rem;
    }
    h1 {
      flex-basis: 70%;
      @media (max-width: ${devices.tablet}px) {
        flex-basis: 100%;
      }
    }
  `,

  Div_social: styled.div`
    @media (max-width: ${devices.tablet}px) {
      display: none;
    }
    ul {
      display: flex;
      margin-left: auto;

      li {
        margin-left: 2rem;
        a {
          transition: 0.2s ease;
          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  `,

  Ul_inTouch: styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10.125rem;
    li {
      flex-basis: 33%;
      display: block;
      @media (max-width: ${devices.tablet}px) {
        &:not(:first-child) {
          display: none;
        }
      }
      h2 {
        font-size: 1.5rem;
        font-weight: 200 !important;
        display: block;
        @media (max-width: ${devices.tablet}px) {
          display: none;
        }
      }
      a {
        font-size: ${({ theme }) => theme.font.size.fs16};
        position: relative;
        &:hover {
          &:before {
            width: 0;
          }
        }
        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: ${({ theme }) => theme.colors.black01};
          transition: 0.2s ease;
        }
      }
    }
  `,

  Div_image_wrapper: styled.div`
    .two-img {
      display: flex;
      justify-content: space-between;
      margin-top: 2%;
      /* margin-bottom: 1rem; */
      @media (max-width: ${devices.tablet}px) {
        flex-direction: column;
      }
      .img-wrapper {
        flex-basis: 49%;
        width: 49%;
        height: 500px;
        margin-top: 1rem;
        @media (max-width: ${devices.tablet}px) {
          flex-basis: 100%;
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  `,

  Div_logo_address: styled.div`
    margin-bottom: 9.125rem;
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 2rem;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0 2rem;

      @media (max-width: ${devices.tablet}px) {
        flex-direction: column;
        align-items: flex-start;
      }

      h2 {
        font-size: 2.5rem;
        @media (max-width: ${devices.tablet}px) {
          margin-bottom: 1rem;
        }
      }
    }
  `,
  Div_animation: styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -2;
  `,
};
