import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_someOtherFacts_container: styled.div`
    width: 40%;
    margin: 0 auto;
    margin-bottom: 5rem;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
      margin-bottom: 2.5rem;
    }

    h2 {
      margin-bottom: 2.5rem;
      font-size: 2.5rem;
    }
    ul {
      margin-bottom: 3rem;
      li {
        position: relative;
        display: flex;
        /* align-items: center; */
        margin-left: -1.8rem;
        margin-bottom: 1.5rem;
        @media (max-width: ${devices.tablet}px) {
          margin-left: 0rem;
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
    .description {
      margin: 5rem 0;
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
  `,
};
