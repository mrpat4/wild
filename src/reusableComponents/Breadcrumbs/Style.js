import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_breadCrumbers_container: styled.div`
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 0.9375rem;
    }
  `,
  Ul: styled.ul`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.fs13};

    a {
      color: ${({ theme }) => theme.colors.accent};
      text-transform: capitalize;
    }
    span {
      color: ${({ theme }) => theme.colors.black04};
      margin: 0 0.5rem;
    }
    .title {
      margin: 0 0;
    }
  `,
};
