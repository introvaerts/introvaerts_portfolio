import styled from 'styled-components';
import { colour, font } from '../../shared/styles/StyleConstants';

export const ImageView = styled.img`
  object-fit: cover;
  height: 45vh;
  max-width: calc(99vw - 1rem);
`;

export const ImageContainer = styled.div`
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center; */}
  text-align: center;
  a {
    font-size: 0.5rem;
    &:hover {
      color: ${colour.primary};
      transform: scale(1.05);
    }
  }

  p {
    font-size: max(20px, 0.4rem);
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Description = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Label = styled.h6`
  font-size: 0.4rem;
  color: ${colour.secondary};
  margin-right: 0.1rem;
`;

export const Details = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
  text-align: left;
  font-size: 0.4rem;
`;
