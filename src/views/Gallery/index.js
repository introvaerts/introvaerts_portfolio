import Api from '../../utils/Api';
import {useEffect, useState} from 'react';
import SingleImage from '../../shared/components/SingleImage';
import Wrapper from '../../shared/components/Wrapper'
import { Title } from './Style';

const Gallery = ({galleryId}) => {
  const [gallery, setGallery] = useState(); 
  const [images, setImages] = useState(); 
  useEffect(() => {
    Api.testWithGalleryId(galleryId)
       .then(res => {
         setImages(res.data.data.images);
         setGallery(res.data.data.gallery);
       })
       .catch(e => console.error(Error(e)))
  }, [galleryId])


  return(<Wrapper>
      {gallery ? <div> 
      <Title>{gallery.name}</Title>
      {images.map((image, index) => {
        return <SingleImage key={index} src={image.image_url}></SingleImage>
      })}
      </div> : <div>Loading Gallery</div>} 
  </Wrapper>)
}

export default Gallery;