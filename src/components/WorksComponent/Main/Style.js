import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "values/const/devices";
import style from "values/style";

export default {
  Div_Main_works_container: styled(motion.div)`
    width: 89%;
    margin: auto;
    /* max-width: 1160px; */
    margin-top: 5rem;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }
  `,
  Div_h1_wrapper: styled.div`
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    @media (max-width: ${devices.tablet}px) {
      display: none;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10rem;
      font-weight: ${({ theme }) => theme.font.weight.thin}!important;
    }
    span {
      position: relative;
      margin: 0 0.3rem;
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
        height: 2px;
        background-color: ${({ theme }) => theme.colors.black02};
        transition: 0.2s ease;
      }
    }
  `,

  Div_worksList_container: styled.div``,

  Ul_works_list: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      flex-basis: 45.83333%;
      max-width: 45.83333%;
      margin-bottom: 10rem;
      @media (max-width: ${devices.tablet}px) {
        flex-basis: 100%;
        max-width: 100%;
        margin-bottom: 4rem;
      }
      &:hover {
        .quick {
          opacity: 1;
          user-select: auto;
        }
      }
    }
  `,

  Div_image_wrapper: styled.div`
    margin-bottom: 2.375rem;
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 1rem;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      .quick {
        display: none;
      }
    }

    position: relative;
    .quick {
      opacity: 0;
      user-select: none;
      position: absolute;
      bottom: 10px;
      right: 22px;
      width: 60px;
      height: 60px;
      cursor: pointer;
      transition: 0.3s ease;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 1.2rem;
      }
    }
  `,

  Div_text_wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${devices.tablet}px) {
      align-items: flex-start;
      width: 89%;
      margin: 0 auto;
    }

    .code {
      margin-bottom: 1rem;
      @media (max-width: ${devices.tablet}px) {
        margin-bottom: 0.5rem;
      }
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.size.fs14};

      &:before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.black01};
        display: inline-block;
        margin-right: 0.5rem;
      }
    }
    .title {
      font-weight: 400;
      font-size: ${({ theme }) => theme.font.size.fs20};
    }
  `,
};
