import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_customerReview_container: styled.div`
    margin-bottom: 5rem;
  `,

  Div_full_width: styled.div`
    width: 100%;
    margin-bottom: 4rem;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  Div_review: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 89%;
      max-width: 89%;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h2 {
      margin-bottom: 3rem;
      font-size: 1.7rem;

      &:before {
        content: "“";
        display: inline-block;
      }
      &:after {
        content: "”";
        display: inline-block;
      }
    }

    .name {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      @media (max-width: ${devices.tablet}px) {
        flex-direction: column;
        align-items: flex-start;
      }
      p {
        margin-left: 1rem;
        @media (max-width: ${devices.tablet}px) {
          margin-left: 0;
          font-size: ${({ theme }) => theme.font.size.fs14};
        }
      }
    }
  `,
};
