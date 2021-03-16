import { ImageContainer, Image } from './Styles';

const Thumbnail = ({ src, handleClick, alt }) => {
  return (
    <ImageContainer className="image-container">
      <Image src={src} onClick={handleClick} alt={alt} />
    </ImageContainer>
  );
};

export default Thumbnail;
