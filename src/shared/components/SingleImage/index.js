import { ImageContainer, Image } from './Styles';

const SingleImage = ({ src, handleClick, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={handleClick} alt={alt}/>
    </ImageContainer>
  );
};

export default SingleImage;
