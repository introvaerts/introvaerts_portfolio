import { StyledGrid } from './Styles';
import { Link } from 'react-router-dom';

import Thumbnail from '../Thumbnail';

export const ImageGrid = ({images}) => {
  console.log(images)
  return (
    <StyledGrid>
      {
        images ? images.map((image) => {
          return (
              <Link to={`/images/${image._id}`}>
                <Thumbnail src={image.image_url} /> 
              </Link>
            );
        }) 
        : <>Loading images</>
      }
    </StyledGrid>
  );
};

export default ImageGrid;
