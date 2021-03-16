import { StyledGrid } from './Styles';
import { Link } from 'react-router-dom';

import Thumbnail from '../Thumbnail';
import { useEffect, useState } from 'react';
import Api from '../../../utils/Api';
import "./Style.css"

export const ImageGrid = ({gallery}) => {
  
  const [images, setImages] = useState();

  useEffect(() => {
    Api.getGallery(gallery._id)
       .then(res => {
        setImages(res.data.data.images)})
       .catch(e => console.log(e))
  }, [gallery])

  return (
    <StyledGrid>
      {
        images ? images.map((image, index) => {
          return (
              <Link key={index} className="images-link" to={`/galleries/${gallery._id}/${image._id}`}>
                <Thumbnail key={index} src={image.image_url} alt={image.alt_text} /> 
              </Link>
            );
        }) 
        : <>Loading images</>
      }
    </StyledGrid>
  );
};

export default ImageGrid;
