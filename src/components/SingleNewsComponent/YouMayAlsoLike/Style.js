import styled from "styled-components";
import devices from "values/const/devices";

export default {
  Div_youMayAlsoLike_container: styled.div`
    margin-bottom: 2rem;
    h3 {
      font-size: ${({ theme }) => theme.font.size.fs11};
      margin-bottom: 5rem;
      text-align: center;
      text-transform: uppercase;
      @media (max-width: ${devices.tablet}px) {
        margin-bottom: 1rem;
        text-align: left;
      }
    }
  `,

  Div_list_wrapper: styled.div``,
  Ul_works_list: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      flex-basis: 45.83333%;
      max-width: 45.83333%;
      margin-bottom: 10rem;
      @media (max-width: ${devices.tablet}px) {
        flex-basis: 100%;
        max-width: 100%;
        margin-bottom: 5rem;
      }

      &:hover {
        .readMore:after {
          width: 0;
        }
      }
    }
  `,

  Div_image_wrapper: styled.div`
    position: relative;
    margin-bottom: 2.375rem;
    @media (max-width: ${devices.tablet}px) {
      margin-bottom: 1rem;
    }
  `,

  Div_text_wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${devices.tablet}px) {
      align-items: flex-start;
    }

    .code {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.size.fs14};

      &:before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.black01};
        display: inline-block;
        margin-right: 0.5rem;
      }
    }
    .title {
      font-weight: 400;
      font-size: ${({ theme }) => theme.font.size.fs20};
    }
    .readMore {
      margin-top: 1.5rem;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.black02};
        transition: 0.2s ease;
      }
    }
  `,
};
