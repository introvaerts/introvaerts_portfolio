import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  min-height: 100px;
  &:hover {
    opacity: 0.5;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
