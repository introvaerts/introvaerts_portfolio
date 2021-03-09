import { ImageContainer, Image } from './Styles';

const SingleImage = ({ src, handleClick }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={handleClick} />
    </ImageContainer>
  );
};

export default SingleImage;
