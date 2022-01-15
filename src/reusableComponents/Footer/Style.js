import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_footer_container: styled.div`
    background-color: ${({ theme }) => theme.colors.black02};
    color: ${({ theme }) => theme.colors.white01};
  `,

  Div_inner_container: styled.div`
    width: 89%;
    margin: 0 auto;
  `,

  Div_logo_address: styled.div`
    margin: 8.5rem 0;
    padding-top: 5rem;

    @media (max-width: ${devices.tablet}px) {
      margin: 8.5rem 0 4rem;
    }

    div.left-side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #353535;
      padding: 1rem 0 2rem;
      @media (max-width: ${devices.laptop}px) {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 0rem;
        .contact {
          margin-top: 2rem;
          font-size: 1rem;
        }
      }

      h2 {
        font-size: 2.5rem;
        font-family: plexMono;
        @media (max-width: ${devices.tablet}px) {
          font-size: 1.5rem;
        }
      }
      .contact {
        display: flex;
        align-items: center;
        p,
        a {
          font-size: ${({ theme }) => theme.font.size.fs14};
        }
        @media (max-width: ${devices.tablet}px) {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2rem;

          .tel {
            margin-top: 2rem;
            margin-bottom: 0.3rem;
          }
          .slash {
            display: none;
          }
          .address {
            max-width: 50%;
          }
        }
        a {
          color: white;
          @media (max-width: ${devices.tablet}px) {
            margin-left: 0;
          }
        }
      }
    }
  `,

  Div_privacy_social: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;
    font-size: ${({ theme }) => theme.font.size.fs11};

    @media (max-width: ${devices.tablet}px) {
      border-top: 1px solid #353535;
      padding-top: 2rem;
      padding-bottom: 2rem;
      .privacy {
        display: none;
      }
    }
    a {
      color: ${({ theme }) => theme.colors.white01};
      opacity: 0.6;
      transition: 0.2s ease;
      &:hover {
        opacity: 1;
      }
    }
    .socials {
      @media (max-width: ${devices.tablet}px) {
        width: 100%;
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          margin-right: 2rem;
          &:last-child {
            margin-right: 0;
          }
          a {
            color: ${({ theme }) => theme.colors.white01};
            opacity: 0.6;
            transition: 0.2s ease;
            @media (max-width: ${devices.tablet}px) {
              font-size: 0.7rem;
              opacity: 1;
            }
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
  `,
};
