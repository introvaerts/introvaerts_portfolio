import styled from 'styled-components';
import { colour } from '../../../shared/styles/StyleConstants';

export const StyledLink = styled.h1`
  color: ${colour.primary};
  &:hover {
    color: ${colour.secondary};
  }
`;

export const Menu = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(${props => props.translate}vw);
  transition: 0.5s ease;
  background: ${colour.background1};
`;
