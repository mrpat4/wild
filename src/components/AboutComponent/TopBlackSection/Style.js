import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_topBlackSection_container: styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.black01};
    color: ${({ theme }) => theme.colors.white01};
    padding-bottom: 7rem;
    margin-bottom: 7.5rem;
    margin-top: -7rem;
    padding-top: 7rem;
  `,
  Div_section_wrapper: styled.div`
    width: 89%;
    margin: 0 auto;
    padding-top: 5rem;
  `,

  Div_header_wrapper: styled.div`
    .code {
      display: flex;
      align-items: center;
      @media (max-width: ${devices.tablet}px) {
        flex-direction: column;
        align-items: flex-start;
      }

      .code {
        font-size: ${({ theme }) => theme.font.size.fs15};
        @media (max-width: ${devices.tablet}px) {
          position: relative;
          margin-left: 1rem;
        }
        &:before {
          content: "";
          width: 8px;
          height: 8px;
          background-color: ${({ theme }) => theme.colors.white01};
          border-radius: 50%;
          margin-right: 0.5rem;
          display: inline-block;
          @media (max-width: ${devices.tablet}px) {
            position: absolute;
            left: -1rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .title {
        font-size: ${({ theme }) => theme.font.size.fs16};
        margin-left: 1rem;
        @media (max-width: ${devices.tablet}px) {
          margin-left: 0;
        }
      }
    }

    h1 {
      margin-top: 2rem;
      font-size: 9rem;
      width: 70%;
      line-height: 9.5rem;
      @media (max-width: ${devices.tablet}px) {
        font-size: 3.5rem;
        line-height: normal;
        width: 100%;
      }
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: center; */
      /* align-items: center; */
    }
  `,

  Div_quick_wrapper: styled.div`
    position: relative;
    display: inline-flex;
    margin-left: 3rem;
    margin-bottom: 2.375rem;

    @media (max-width: ${devices.tablet}px) {
      margin-left: 1rem;
      margin-bottom: 0;
    }
    .quick {
      opacity: 1;
      user-select: none;
      width: 90px;
      height: 90px;
      cursor: pointer;
      transition: 0.3s ease;
      @media (max-width: ${devices.tablet}px) {
        width: 60px;
        height: 60px;
      }
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
        @media (max-width: ${devices.tablet}px) {
          font-size: 0.9rem;
        }
      }
    }
  `,

  Div_slider_wrapper: styled.div`
    margin-top: 10rem;
    @media (max-width: ${devices.tablet}px) {
      margin-top: 5rem;
      margin-left: 1.5rem;
    }
    .swiper-wrapper {
      align-items: center;
    }
    .swiper-slide {
      /* width: auto !important;
      min-height: 300px !important;
      @media (max-width: ${devices.tablet}px) {
        min-height: auto !important;
        width: 360px !important;
      } */
      .slider-items {
        width: 100%;
        height: 100%;
      }
    }
    img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  `,

  Div_subTitle_wrapper: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    width: 60%;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }
    h2 {
      white-space: pre-wrap;
      word-break: normal;
      overflow-wrap: break-word;
      width: 100%;
      margin-top: 2rem;
      font-size: 4rem;
      margin-left: auto;
      @media (max-width: ${devices.tablet}px) {
        font-size: 2rem;
        margin-top: 1.5rem;
      }
    }
  `,
};
