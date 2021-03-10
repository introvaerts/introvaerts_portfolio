import styled from 'styled-components';
import { font, colour } from '../../../shared/styles/StyleConstants';

export const StyledLink = styled.h1 `
  color: ${colour.primary}
  &:hover {
    color: ${colour.secondary};
  }
`
