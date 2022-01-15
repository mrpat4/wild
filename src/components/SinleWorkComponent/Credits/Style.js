import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_credits_container: styled.div``,

  Div_video_wrapper: styled.div`
    width: 100%;
    background: #d5f0ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6.5rem;
    padding-bottom: 6.5rem;
    margin-bottom: 5rem;

    video {
      width: 80%;
      @media (max-width: ${devices.tablet}px) {
        width: 90%;
      }
      &:last-child {
        margin-top: 4.375rem;
      }
    }
  `,

  Div_credits: styled.div`
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    margin: 0 auto;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 89%;
      max-width: 89%;
    }
    ul {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      white-space: nowrap;
      @media (max-width: ${devices.tablet}px) {
        flex-direction: column;
      }

      li {
        flex-basis: 50%;
        max-width: 50%;
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.font.size.fs14};
        p {
          font-size: ${({ theme }) => theme.font.size.fs14};
        }
        text-transform: capitalize;
        @media (max-width: ${devices.tablet}px) {
          flex-basis: 100%;
          max-width: 100%;
        }
      }
    }
  `,
};
