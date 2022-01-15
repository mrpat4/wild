import styled, { css } from "styled-components"
import ChangeLeftAndRightWithDirection from 'utils/ChangeLeftAndRightWithDirection';

export const Ul_steps_container = styled.ul`
  display: flex;
  max-width: 900px;
  margin: auto;
  padding: 0 30px;
  > li {
    &:last-child {
      flex: none;
    }
  }
`
export const Li_step_wrapper = styled.li`
  display: flex;
  position: relative;
  flex: 1;
  ${props =>
    props.active &&
    css`
      > * {
        color: #ff6644;
        font-weight: bold;
      }
      span {
        color: #ff6644;
        font-weight: 700;
      }
    `}
`
export const Div_circle__with_title = styled.div`
  > div {
    color: #d0d0d0;
    font-size: 0.9rem;
    position: absolute;
    // width: 100%;
    text-align: center;
    top: -25px;
    white-space: nowrap;
    text-transform: capitalize;
  }
`

export const Span_circle = styled.span`
  text-align: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: #d0d0d0;
  z-index: 1;
  ${props =>
    props.active &&
    css`
      background-color: #ff6644;
    `}
`
export const Span_border = styled.span`
  background-color: #d0d0d0;
  flex: 1;
  height: 3px;
  position: absolute;
  width: 98%;
  bottom: 8px;
    ${({ theme }) => theme.direction && css`
      ${ChangeLeftAndRightWithDirection(`left`, theme.direction)}: 19px;
    `}
${props =>
    props.active &&
    css`
      background-color: #ff6644;
    `}
`
