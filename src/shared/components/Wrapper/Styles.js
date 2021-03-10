import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0.5rem;
  background: ${colour.background1};
  ${'' /* overflow-x: hidden; */}
`;
