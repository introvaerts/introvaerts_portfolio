import styled from 'styled-components';

export const ImageContainer = styled.div`
  ${
    '' /* width: calc( 98vw - 1rem);
  height: 45vh;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; */
  }
  ${'' /* max-width: 30vw;
  margin: 0 auto; */}
  width: 100%;
  margin: 2rem auto;
  height: 45vh;
  text-align: center;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
