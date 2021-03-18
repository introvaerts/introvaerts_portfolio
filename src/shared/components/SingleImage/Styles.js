import styled from 'styled-components';

export const ImageContainer = styled.div`
  ${
    '' /* width: calc( 98vw - 1rem);
  height: 45vh;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; */
  }
  max-width: 30vw;
  margin: 0 auto;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
