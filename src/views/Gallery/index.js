import Api from '../../utils/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Title } from './Style';
import ImageGrid from '../../shared/components/ImageGrid';
import ViewContainer from '../../shared/components/ViewContainer';


const Gallery = () => {
  const [gallery, setGallery] = useState();
  const { galleryId } = useParams();

  useEffect(() => {
    Api.getGallery(galleryId)
      .then(res => {
        setGallery(res.data.data.gallery);
      })
      .catch(e => console.error(Error(e)));
  }, [galleryId]);

  return (
    <ViewContainer>
      {gallery ? (
        <div>
          <Title>{gallery.name}</Title>
          <ImageGrid gallery={gallery} />
        </div>
      ) : (
        <div>Loading Gallery</div>
      )}
    </ViewContainer>
  );
};

export default Gallery;
