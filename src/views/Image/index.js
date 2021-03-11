import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleImage from '../../shared/components/SingleImage';
import Api from '../../utils/Api';

const Image = () => {
  const imageParam = useParams();
  let [image, setImage] = useState();

  useEffect(() => {
    Api.getImage(imageParam.id)
      .then(response => setImage(response.data.data))
      .catch(err => console.error(err));
  }, [imageParam]);

  return (
    <div>
      <SingleImage src={image?.image_url} />
      <h3>
        {image?.caption.title} {image?.caption.year} {image?.caption.media}{' '}
        {image?.caption.dimensions}
      </h3>
      <p>{image?.description}</p>
    </div>
  );
};

export default Image;
