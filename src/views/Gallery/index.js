import Api from '../../utils/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Title, Wrapper } from './Style';
import ImageGrid from '../../shared/components/ImageGrid';


const Gallery = ({ galleryId }) => {
  const [gallery, setGallery] = useState();
  const [images, setImages] = useState();
  const { galleryName } = useParams();

  useEffect(() => {
    Api.getGalleryByName(galleryName)
      .then(res => {
        setImages(res.data.data.images);
        setGallery(res.data.data.gallery);
      })
      .catch(e => console.error(Error(e)));
  }, [galleryName]);

  return (
    <>
      {gallery ? (
        <div>
          <Title>{gallery.name}</Title>
          <ImageGrid gallery={gallery} />
        </div>
      ) : (
        <div>Loading Gallery</div>
      )}
    </>
  );
};

export default Gallery;
