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
      .then(response => {
        setImage(response.data.data)
      })
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    const getShit = async () => {
      const fuckingGallery = (await Api.getGalleryByName(name)).data.data.gallery;
      const index = fuckingGallery.images.findIndex(image => image === id);
      if (index === fuckingGallery.images.length - 1) {
        setNextImage(fuckingGallery.images[0]);
        setPrevImage(fuckingGallery.images[index - 1]);
      } else if (index === 0) {
        setPrevImage(fuckingGallery.images[fuckingGallery.images.length - 1]);
        setNextImage(fuckingGallery.images[index + 1]);
      } else {
        setNextImage(fuckingGallery.images[index + 1]);
        setPrevImage(fuckingGallery.images[index - 1]);
      }
      setGallery(fuckingGallery);
    };
    getShit();
  }, [id]);

  return (
    <div>
      <Link to={`/galleries/${name}`}>Back to {gallery?.name}</Link>
      <SingleImage src={image?.image_url} />
      <h3>
        {image?.caption.title} {image?.caption.year} {image?.caption.media}{' '}
        {image?.caption.dimensions}
      </h3>
      <p>{image?.description}</p>
      <Link to={`/galleries/${name}/${prevImage}`}>previous</Link>
      <Link to={`/galleries/${name}/${nextImage}`}>next</Link>
    </div>
  );
};

export default Image;
