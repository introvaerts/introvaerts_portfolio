import { StyledGrid } from './Styles';
import { Link } from 'react-router-dom';

import Thumbnail from '../Thumbnail';

export const ImageGrid = ({images}) => {
  console.log(images)
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
