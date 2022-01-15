import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_ourTeam_container: styled.div``,

  Div_sticky: styled.div`
    width: 89%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `,
  Ul_list: styled.ul`
    flex-basis: 30%;
    max-width: 30%;
    height: 100vh;
    @media (max-width: ${devices.tablet}px) {
      display: none;
    }
    .active1 {
      opacity: 1;
      font-weight: 400;
    }
    li {
      margin-bottom: 1rem;
      margin-top: 1rem;
      opacity: 0.6;
      transition: 0.2s ease;
      .code {
        margin-right: 1rem;
        &:before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: ${({ theme }) => theme.colors.black02};
          margin-right: 0.5rem;
          border-radius: 50%;
        }
      }
    }
  `,

  Div_content_wrapper: styled.div`
    flex-basis: 69%;
    max-width: 69%;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 100%;
      max-width: 100%;
    }
  `,

  Div_team_wrapper: styled.div`
    padding: 0 0 6.25rem;

    ul {
      display: flex;
      margin: -15px;
      flex-wrap: wrap;

      li {
        flex-basis: 30%;
        margin-bottom: 5rem;
        padding: 15px;
        @media (max-width: ${devices.laptop}px) {
          flex-basis: 50%;
        }
        @media (max-width: ${devices.mobileL}px) {
          flex-basis: 100%;
        }
      }
    }
  `,

  Div_member: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title-wrapper {
      margin-top: 1rem;
      p,
      span {
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.fs14};
        text-transform: capitalize;
      }
      p {
        font-size: ${({ theme }) => theme.font.size.fs20};
        font-weight: 400;
      }
    }
  `,

  Div_client_wrapper: styled.div`
    padding: 6.25rem 0;
    border-top: 1px solid #e9e9e9;

    h2 {
      font-size: 3.8rem;
      margin-bottom: 1.5rem;
      @media (max-width: ${devices.tablet}px) {
        font-size: 2rem;
      }
    }
    ul {
      display: flex;
      margin: -15px;
      flex-wrap: wrap;

      li {
        flex-basis: 24%;
        padding: 15px;
        @media (max-width: ${devices.tablet}px) {
          flex-basis: 30%;
        }
        img {
          width: 50%;
          @media (max-width: ${devices.tablet}px) {
            width: 100%;
          }
        }
      }
    }
  `,
};
