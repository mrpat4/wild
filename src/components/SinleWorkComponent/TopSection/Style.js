import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import devices from "values/const/devices";

export default {
  Div_top_section_container: styled(motion.div)`
    margin-bottom: 5rem;
  `,

  Div_header: styled.div`
    margin-bottom: 4.0625rem;
    p {
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.font.size.fs14};
      margin-bottom: 2rem;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.black02};
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }

    .quick-wrapper {
      display: none;
    }

    h1 {
      max-width: 70%;
      font-size: 3.8rem;
      font-weight: 200 !important;
      margin-left: -5px;
      @media (max-width: ${devices.tablet}px) {
        width: 100%;
        font-size: 2rem;
        margin-left: 0;
      }
    }
    /* ======================== laptop media ============================== */

    @media (max-width: ${devices.laptop}px) {
      .title-quick-wrapper {
        position: relative;
      }
      .quick-wrapper {
        position: absolute;
        bottom: 0px;
        right: 50%;
        display: block;
      }
      .quick {
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: 0.3s ease;
        border: 2px solid orange;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
        }
        i.fa-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 1rem;
        }
      }
    }

    /* ====================================================== */
    /* ============================= tablet media ========================= */

    @media (max-width: ${devices.tablet}px) {
      .title-quick-wrapper {
        position: relative;
      }
      .quick-wrapper {
        position: absolute;
        bottom: -20px;
        right: 60%;
        display: block;
      }
      .quick {
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: 0.3s ease;
        border: 2px solid orange;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
        }
        i.fa-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 1rem;
        }
      }
    }
    /* ====================================================== */
    /*================================ mobile media===================================== */
    @media (max-width: ${devices.mobileL}px) {
      .title-quick-wrapper {
        position: relative;
      }
      .quick-wrapper {
        position: absolute;
        bottom: -10px;
        right: 20%;
        display: block;
      }
      .quick {
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: 0.3s ease;
        border: 2px solid orange;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
        }
        i.fa-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 1rem;
        }
      }
    }
    /* ====================================================== */
  `,

  Div_image_section: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    margin-bottom: 5rem;
    @media (max-width: ${devices.tablet}px) {
      padding: 0;
      width: 89%;
      margin: 0 auto;
      margin-bottom: 5rem;
    }
    .left-side {
      width: 90%;
      .information {
        display: none;
      }
      @media (max-width: ${devices.tablet}px) {
        width: 100%;
        position: relative;
        .information {
          position: absolute;
          bottom: -17px;
          right: 17px;
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: ${({ theme }) => theme.font.size.fs13};
          background: #fff;
          box-shadow: 0 1px 4px 0 rgb(0 0 0 / 12%);

          p {
            font-size: ${({ theme }) => theme.font.size.fs13};
          }
          i {
            margin-left: 1rem;
          }
        }
      }
      img {
        width: 100%;
      }
    }

    .right-side {
      width: 9%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: ${devices.tablet}px) {
        display: none;
      }
      .quick {
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: 0.3s ease;
        border: 2px solid orange;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
        }
        i.fa-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 1.2rem;
        }
      }
      .quick-wrapper {
        position: relative;
        padding: 0.8rem;
        &:hover {
          .tooltip {
            opacity: 1;
            user-select: auto;
            /* transform: translateX(0); */
            left: -160%;
          }
        }
      }
      .link {
        position: relative;
        margin-top: 2rem;
        a {
          padding: 2rem 2rem;
          i.fa-arrow-up {
            transform: rotate(45deg);
            font-size: ${({ theme }) => theme.font.size.fs20};
          }
        }
        &:hover {
          .tooltip {
            opacity: 1;
            user-select: auto;
            /* transform: translateX(0); */
            left: -140px;
          }
        }
      }
    }
  `,
  Div_information: styled.div`
    i {
      transition: 0.2s ease;
      ${({ showHeight }) =>
        showHeight &&
        css`
          transform: rotate(45deg);
        `}
    }
  `,

  Div_tooltip: styled.div`
    position: absolute;
    top: 50%;
    left: -150px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(17, 17, 17, 0.88);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white01};
    padding: 0.5rem 1.2rem;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.font.size.fs14};
    white-space: nowrap;
    transition: 0.2s ease;
    opacity: 0;
    user-select: none;
    /* transform: translateX(-10px); */
    i {
      margin-left: 0.5rem;
    }
  `,

  Div_client_and_description: styled.div`
    width: 89%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${devices.tablet}px) {
      flex-direction: column;
    }
  `,
  Div_client: styled.div`
    width: 29%;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
      max-height: 0;
      overflow: hidden;
      transition: 0.2s ease;
      ${({ showHeight }) =>
        showHeight &&
        css`
          max-height: 500px;
        `}
    }
  `,

  Div_client_items_wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.font.size.fs14};
    strong {
      margin-bottom: 0.3rem;
    }
  `,

  Div_client_description: styled.div`
    width: 69%;
    font-size: ${({ theme }) => theme.font.size.fs18};

    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }

    h3 {
      font-weight: 400 !important;
      margin-bottom: 1rem;
    }

    p {
      max-width: 64%;
      margin-bottom: 2rem;
      @media (max-width: ${devices.tablet}px) {
        max-width: 100%;
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      background-color: #ff5332;
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.font.size.fs16};
      color: ${({ theme }) => theme.colors.white01};
      font-weight: 400;

      i {
        transform: rotate(45deg);
        margin-left: 1rem;
      }
    }
  `,
};
