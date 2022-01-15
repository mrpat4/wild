import styled, { css } from 'styled-components';

export function fontSize(theme, size) { return theme.fontSize && css`font-size:${props.theme.fontSize[size]};` }
