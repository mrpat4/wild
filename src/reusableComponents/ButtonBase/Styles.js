import styled from "styled-components"

export default {

  button_box: styled.button`
  background-color: rgb(0, 110, 182);
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  letter-spacing: 0.125em;
  line-height: 0.75rem;
  border: 0.125rem solid rgb(0, 110, 182);
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  padding: 10px 30px;
  box-shadow: rgb(60 64 67 / 30%) 0px 0.0625rem 0.125rem 0px, rgb(60 64 67 / 15%) 0px 0.125rem 0.375rem 0.125rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover{
  background-color: rgb(60, 200, 255);
  border-color: rgb(60, 200, 255);
  color: rgb(17, 43, 74);
  }
   `,
}