import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  grid-gap: 0.1rem;
  grid-template-rows: repeat(auto-fit, minmax(3rem, 1fr));
`;

// export const StyledGrid = styled.div`
//   display: flex;
//   ${'' /* grid-template-columns: repeat(3, 1fr); */}
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   ${'' /* padding-top: 0.25rem;
//   background: rgba(0,0,0,0.1) */}
// `;
