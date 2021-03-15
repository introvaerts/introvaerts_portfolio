import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledTitle = styled.h4`
  ${'' /* margin-top: 0.2rem; */}
  color: ${colour.primary};
  text-align: left;
  margin: 0;
`;

export const StyledContainer = styled.div`
  height: 3rem;
  width: 80vw;
  position: fixed;
  padding: 0.5rem;
  top: 0;
  left: 0;
`
