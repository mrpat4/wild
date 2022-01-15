import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "values/const/devices";
import style from "values/style";

export default {
  Div_Main_news_container: styled(motion.div)`
    margin-bottom: 2rem;
  `,
  Div_h1_wrapper: styled.div`
    flex-basis: 83.33333%;
    max-width: 83.33333%;
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
        border-top: 1px solid #e9e9e9;
        padding-top: 2rem;
        margin-bottom: 2rem;
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      &:hover {
        .readMore:after {
          width: 0;
        }
      }
    }
  `,

  Div_image_wrapper: styled.div`
    position: relative;
    margin-bottom: 2.375rem;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 48%;
      max-width: 48%;
      margin-bottom: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `,

  Div_text_wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 48%;
      max-width: 48%;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .code {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.size.fs14};
      @media (max-width: ${devices.tablet}px) {
        margin-bottom: 0.3rem;
      }

      &:before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.black01};
        display: inline-block;
        margin-right: 0.5rem;
        @media (max-width: ${devices.tablet}px) {
          margin-top: 0.3rem;
        }
      }
    }
    .title {
      font-weight: 400;
      font-size: ${({ theme }) => theme.font.size.fs20};
      @media (max-width: ${devices.tablet}px) {
        font-size: ${({ theme }) => theme.font.size.fs17};
      }
    }
    .readMore {
      margin-top: 1.5rem;
      position: relative;
      @media (max-width: ${devices.tablet}px) {
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.black02};
        transition: 0.2s ease;
      }
    }
  `,
};
