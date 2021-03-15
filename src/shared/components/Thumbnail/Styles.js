import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 30vw;
  max-width: 200px;
  height: 30vw;
  max-height: 200px;
  ${'' /* margin: 0.1rem 0.1rem; */}
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
