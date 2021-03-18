import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledTitle = styled.h4`
  color: ${colour.reverse};
  text-align: center;
  margin: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${colour.theme2};
`;
