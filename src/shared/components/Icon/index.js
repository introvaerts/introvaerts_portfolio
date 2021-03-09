import { IconContainer, AbsoluteImage } from './Styles';

const Icon = ({ src, handleClick }) => {
  return (
    <IconContainer>
      <AbsoluteImage src={src} onClick={handleClick} />
    </IconContainer>
  );
};

export default Icon;
