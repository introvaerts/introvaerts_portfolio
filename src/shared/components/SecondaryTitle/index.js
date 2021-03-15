import { StyledTitle, StyledContainer } from './Styles';

const Title = ({ text }) => {
  return (
    <StyledContainer>
      <StyledTitle>{text}</StyledTitle>
    </StyledContainer>
  ) 
};

export default Title;
