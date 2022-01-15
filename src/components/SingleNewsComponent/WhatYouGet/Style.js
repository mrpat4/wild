import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_whatYouGet_container: styled.div`
    margin-bottom: 10rem;
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 7rem;
    }
    h2 {
      margin: 0 auto;
      margin-bottom: 4rem;
      width: 40%;
      font-size: 2.5rem;
      @media (max-width: ${devices.tablet}px) {
        width: 100%;
        margin-bottom: 2.5rem;
      }
    }
  `,

  Div_list_wrapper: styled.div`
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `,

  Li_list_item: styled.li`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    @media (max-width: ${devices.tablet}px) {
      flex-basis: 100%;
    }

    h3 {
      margin: 1.375rem 0;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    p {
      text-align: center;
      line-height: 1.8rem;
    }
  `,
};
