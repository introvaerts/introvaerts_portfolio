import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';

export const Title = styled.h4`
  color: ${colour.primary};
  &:hover {
    color: ${colour.secondary};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;
