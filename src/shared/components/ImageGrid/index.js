import { StyledGrid } from './Styles';
import { Link } from 'react-router-dom';

import Thumbnail from '../Thumbnail';
import { useEffect, useState } from 'react';
import Api from '../../../utils/Api';

export const ImageGrid = ({gallery}) => {
  
  const [images, setImages] = useState();

  useEffect(() => {
    Api.getGalleryByName(gallery.name)
       .then(res => {
        setImages(res.data.data.images)})
       .catch(e => console.log(e))
  }, [])

  return (
    <StyledGrid>
      {
        images ? images.map((image, index) => {
          return (
              <Link key={index} to={`/galleries/${gallery.name}/${image._id}`}>
                <Thumbnail key={index} src={image.image_url} /> 
              </Link>
            );
        }) 
        : <>Loading images</>
      }
    </StyledGrid>
  );
};

export default ImageGrid;
