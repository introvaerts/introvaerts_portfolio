import { ImageContainer, Image } from './Styles';

const Thumbnail = ({ src, handleClick, altText }) => {
  return (
    <ImageContainer className="image-container">
      <Image src={src} onClick={handleClick} altText={altText} />
    </ImageContainer>
  );
};

export default Thumbnail;
