import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleImage from '../../shared/components/SingleImage';
import Api from '../../utils/Api';

const Image = () => {
  const { name, id } = useParams();
  const [image, setImage] = useState();
  const [gallery, setGallery] = useState();
  const [nextImage, setNextImage] = useState();
  const [prevImage, setPrevImage] = useState();

  useEffect(() => {
    Api.getImage(id)
      .then(response => setImage(response.data.data))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    const getGalleryInfo = async () => {
      const thisGallery = (await Api.getGalleryByName(name)).data.data.gallery;
      const index = thisGallery.images.findIndex(imageId => imageId === id);
      if (index === thisGallery.images.length - 1) {
        setNextImage(thisGallery.images[0]);
        setPrevImage(thisGallery.images[index - 1]);
      } else if (index === 0) {
        setPrevImage(thisGallery.images[thisGallery.images.length - 1]);
        setNextImage(thisGallery.images[index + 1]);
      } else {
        setNextImage(thisGallery.images[index + 1]);
        setPrevImage(thisGallery.images[index - 1]);
      }
      setGallery(thisGallery);
    };
    getGalleryInfo();
  }, [id]);

  return (
    <div>
      <Link to={`/galleries/${gallery?.name}`}>Back to {gallery?.name}</Link>
      <SingleImage src={image?.image_url} />
      <h3>
        {image?.caption.title} {image?.caption.year} {image?.caption.media}{' '}
        {image?.caption.dimensions}
      </h3>
      <p>{image?.description}</p>
      <Link to={`/galleries/${gallery?.name}/${prevImage}`}>previous</Link>
      <Link to={`/galleries/${gallery?.name}/${nextImage}`}>next</Link>
    </div>
  );
};

export default Image;
