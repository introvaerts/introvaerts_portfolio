import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledContainer = styled.div`
  ${'' /* width: 98vw; */}
  position: relative;
  max-width: 1800px;
  min-height: 100vh;
  padding: 0.5rem;
  margin: 0 auto;
  background: ${colour.background1};
  ${'' /* background: ${props => props.themeColor}; */}
  overflow-x: hidden;
`;
