import styled from "styled-components";

export default {
  Div_footer_container: styled.div`
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    z-index: 2;
  `,
  Div_footer_inner_wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 89%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.white01};

    .languages,
    .social {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.font.size.fs11};
      font-weight: 300;

      p {
        margin: 0;
        margin-right: 1rem;
        text-transform: capitalize;
      }
      ul {
        display: flex;
        .active {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #fff;
            transition: 0.2s ease;
          }
        }
        &:hover {
          .active::after {
            width: 0;
          }
        }
        li {
          margin-right: 1rem;
          &:last-child {
            margin-right: 0;
          }
          span,
          a {
            color: ${({ theme }) => theme.colors.white01};
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.2s ease;

            &:hover {
              opacity: 0.6;
            }
          }
        }
      }
      span {
        position: relative;
        &:hover {
          .active {
            opacity: 0;
          }
          &:after {
            width: 100%;
          }
        }
        &:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #fff;
          transition: 0.2s ease;
        }
      }
    }
  `,
};
