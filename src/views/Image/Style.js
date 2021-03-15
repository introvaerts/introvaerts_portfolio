import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';



export const ImageView = styled.img`
  object-fit: cover;
  height: 45vh;
  max-width: calc(99vw - 1rem);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 0.5rem;
    &:hover {
      color: ${colour.primary};
      transform: scale(1.05);
    }
  }

  p {
    font-size: minmax(12px, 0.3rem);
    margin-left: 0.5rem;
  }
`

export const Controls = styled.div`
  width: calc( 99vw - 1rem );
  display: flex;
  justify-content: space-between;
`

export const Description = styled.div`
  margin-top: 1rem;
  width: calc( 99vw - 1rem );
  display: flex;
  flex-wrap: wrap
`

export const Label = styled.h6`
  font-size: 0.4rem;
  color: ${colour.secondary};
  margin-left: 0.5rem;
  margin-right: 0.1rem;
`;

export const Details = styled.h3`
  margin: 0;
  text-align: left;
  font-size: 0.4rem;
`