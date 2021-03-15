import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  ${'' /* grid-template-columns: repeat(3, 1fr); */}
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  ${'' /* grid-auto-flow: column; */}
  grid-template-rows: repeat(auto-fill, 30vw);
`;
// export const StyledGrid = styled.div`
//   display: flex;
//   ${'' /* grid-template-columns: repeat(3, 1fr); */}
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   ${'' /* padding-top: 0.25rem;
//   background: rgba(0,0,0,0.1) */}
// `;
