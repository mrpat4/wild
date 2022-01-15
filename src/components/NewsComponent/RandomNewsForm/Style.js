import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_randomNewsContainer: styled.div`
    border-top: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10rem;
    padding-top: 5.625rem;
    font-size: 1.5rem;
    @media (max-width: ${devices.tablet}px) {
      font-size: 1.2rem;
      margin-bottom: 5rem;
      h2 {
        text-align: center;
      }
    }
  `,

  Div_form_container: styled.div`
    display: flex;
    align-items: center;
    .input-container {
      display: flex;
      align-items: center;
    }
    @media (max-width: ${devices.tablet}px) {
      flex-direction: column;
    }
    span {
      margin-left: 1rem;
      @media (max-width: ${devices.tablet}px) {
        margin-left: 0;
      }
    }
    form {
      padding: 0.5rem 1rem;
      @media (max-width: ${devices.tablet}px) {
        padding: 0 1rem;
      }
      input {
        border: none;
        background-color: transparent;
        font-size: 2rem;
        width: 300px;
        @media (max-width: ${devices.tablet}px) {
          width: 150px;
          font-size: 1rem;
        }
        &::placeholder {
          color: #e9e9e9;
        }
        &:focus,
        &:active {
          outline: none;
        }
      }
    }
  `,
};
