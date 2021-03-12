import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  ${'' /* grid-template-columns: repeat(3, 1fr); */}
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-template-rows: repeat(auto-fill, 30vw);
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;
