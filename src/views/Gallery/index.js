import Api from '../../utils/Api';
import { useEffect, useState } from 'react';
import SingleImage from '../../shared/components/SingleImage';
import { Title, Wrapper } from './Style';
import { Link } from 'react-router-dom';

const Gallery = ({ galleryId }) => {
  const [gallery, setGallery] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    Api.getGallery(galleryId)
      .then(res => {
        setImages(res.data.data.images);
        setGallery(res.data.data.gallery);
      })
      .catch(e => console.error(Error(e)));
  }, [galleryId]);

  return (
    <Wrapper>
      {gallery ? (
        <div>
          <Title>{gallery.name}</Title>
          {images.map((image, index) => {
            return (
              <Link to={`/images/${image._id}`}>
                <SingleImage key={index} src={image.image_url} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div>Loading Gallery</div>
      )}
    </Wrapper>
  );
};

export default Gallery;
