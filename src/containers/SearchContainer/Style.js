import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_search_container: styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 0.625rem;
      font-weight: ${({ theme }) => theme.font.weight.light};
    }
    .result {
      font-style: italic;
      margin-bottom: 1.875rem;
    }
  `,

  Div_results_wrapper: styled.div`
    flex: 0 0 45%;
    width: 45%;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
      flex: 0 0 100%;
    }
    h3 {
      font-size: ${({ theme }) => theme.font.size.fs18};
      margin-bottom: 18px;
    }
  `,
};
