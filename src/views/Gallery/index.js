import Api from '../../utils/Api';
import {useEffect, useState} from 'react';
import SingleImage from '../../shared/components/SingleImage';

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


  return(<div>
      {gallery ? <div> 
      <h1>{gallery.name}</h1>
      {images.map((image) => {
        return <SingleImage src={image.image_url}></SingleImage>
      })}
      </div> : <div>Loading Gallery</div>} 
  </div>)
}

export default Gallery;