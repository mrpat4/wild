import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_topSection_container: styled(motion.div)`
    margin-bottom: 5rem;
  `,

  Div_header: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: ${devices.tablet}px) {
      align-items: flex-start;
    }
    .code {
      text-transform: uppercase;
      margin-bottom: 2rem;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.black02};
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
    .title {
      margin-bottom: 3.375rem;
      font-size: 3.8rem;
      width: 70%;
      text-align: center;

      @media (max-width: ${devices.tablet}px) {
        font-size: 2rem;
        width: 100%;
        text-align: left;
      }
    }
  `,

  Div_posted_wrapper: styled.div`
    display: flex;
    margin-bottom: 4.25rem;
    @media (max-width: ${devices.tablet}px) {
      flex-direction: column;
      margin-bottom: 2rem;
    }
  `,

  Div_posted_item: styled.div`
    display: flex;
    align-items: center;
    &:last-child {
      @media (max-width: ${devices.tablet}px) {
        margin-left: 0;
      }
      margin-left: 2rem;
    }
    p {
      margin-left: 0.5rem;
    }
  `,

  Div_img_wrapper: styled.div`
    margin-bottom: 5rem;
    width: 100%;
    img {
      width: 100%;
      /* object-fit: cover; */
    }
  `,

  Div_apply_now: styled.div`
    width: 40%;
    margin: 0 auto;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }
    a {
      font-size: ${({ theme }) => theme.font.size.fs16};
      background-color: ${({ theme }) => theme.colors.black01};
      padding: 0.8rem 1.5rem;
      color: #fff;
      display: inline-block;
      margin-bottom: 5rem;
      font-weight: 400;
    }
    .description {
      font-size: ${({ theme }) => theme.font.size.fs18};
      margin-bottom: 3rem;
    }

    ul {
      margin-bottom: 3rem;
      h2 {
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
      }
      li {
        position: relative;
        display: flex;
        /* align-items: center; */
        margin-left: -1.8rem;
        margin-bottom: 1.5rem;
        @media (max-width: ${devices.tablet}px) {
          margin-left: 0;
        }

        &:before {
          content: "\f726";
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          font-family: "Font Awesome 5 Pro";
          font-weight: 900;
          font-size: 0.7rem;
          display: inline-block;
          margin-right: 1rem;
          margin-top: 0.5rem;
        }
      }
    }
  `,
};
