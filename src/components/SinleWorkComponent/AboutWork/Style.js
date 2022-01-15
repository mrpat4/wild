import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_aboutWork_container: styled.div`
    width: 89%;
    margin: 0 auto;
    margin-bottom: 5rem;
    @media (max-width: ${devices.tablet}px) {
      width: 100%;
    }
  `,
  Div_img_container: styled.div`
    width: 100%;
    background: #d5f0ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6.5rem;
    padding-bottom: 6.5rem;
    margin-bottom: 5rem;

    img {
      width: 80%;
      @media (max-width: ${devices.tablet}px) {
        width: 90%;
      }
    }
  `,
  Div_description: styled.div`
    display: flex;
    justify-content: center;

    p {
      max-width: 45%;
      @media (max-width: ${devices.tablet}px) {
        max-width: 89%;
      }
    }
  `,
};
