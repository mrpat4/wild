import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_footer_container: styled.div`
    padding: 0.5rem 0;
    margin-top: 1.25rem;
  `,

  Div_text_wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.accent};
      span {
        color: ${({ theme }) => theme.colors.grey05};
      }
    }
    .dropDown_wrapper {
      width: 10%;
      @media (max-width: ${devices.tablet}px) {
        width: 30%;
      }
    }
    p,
    i {
      font-size: ${({ theme }) => theme.font.size.fs11};
      color: ${({ theme }) => theme.colors.black05};
    }
  `,
  Div_terms: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.fs8_4};
    margin: 0.625rem 0 1.25rem 0;

    a {
      color: ${({ theme }) => theme.colors.black05};
      &:first-child {
        border-right: 1px solid #333;
        padding-right: 0.5rem;
        margin-right: 0.5rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  `,
};
