import Api from '../../utils/Api';
import { useEffect, useState } from 'react';
import { Title, Wrapper } from './Style';
import ImageGrid from '../../shared/components/ImageGrid';

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
          <ImageGrid images={gallery.images} />
        </div>
      ) : (
        <div>Loading Gallery</div>
      )}
    </Wrapper>
  );
};

export default Gallery;
