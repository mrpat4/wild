import styled, { css } from "styled-components";
import ChangeLeftAndRightWithDirection from "utils/ChangeLeftAndRightWithDirection";
import device from "values/const/devices";

export const Div_address_head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  > svg {
    cursor: pointer;
  }
  > span {
    font-weight: 600;
  }
`;
export const Form_address = styled.form``;
export const Div_form_row = styled.div`
  display: flex;
  margin: 20px 0;
  @media (max-width: ${device.tablet}px) {
    flex-direction: column;
  }
  > label {
    text-transform: capitalize;
    ${({ theme }) =>
    theme.direction &&
    css`
           margin-${ChangeLeftAndRightWithDirection(
      `right`,
      theme.direction
    )}: 10px;
       `}
    width: 125px;
  }
  > input {
    border: 1px solid ${({ theme }) => theme.colors.grey03};
    flex: 1;
    padding: 4px 10px;
  }
  select {
    border: unset;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
  }
`;
export const Div_address_footer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 30px;
  button {
    margin: 0 10px;
  }
`;
export const Div_form_body_wrapper = styled.div`
  position: relative;
`;
