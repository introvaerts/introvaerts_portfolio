import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImageView, ImageContainer, Controls, Label, Details, Description } from './Style';
import ViewContainer from '../../shared/components/ViewContainer';
import SecondaryTitle from '../../shared/components/SecondaryTitle';
import Api from '../../utils/Api';

const Image = ({ page_title }) => {
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
    const getGallery = async () => {
      const thisGallery = (await Api.getGallery(name)).data.data.gallery;
      const index = thisGallery.images.findIndex(image => image === id);
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
    getGallery();
  }, [id, name]);

  return (
    <>
      <SecondaryTitle text={page_title} />
      <ViewContainer>
        <ImageContainer>
          <ImageView src={image?.image_url} alt={image?.alt_text} />
          <Controls>
            {/* <Link to={`/galleries/${name}`}>Back to {gallery?.name}</Link> */}
            <Link to={`/galleries/${name}/${nextImage}`}>{`< prev`}</Link>
            <Link to={`/galleries/${name}/${prevImage}`}>{`next >`}</Link>
          </Controls>
          <Description>
            {image?.caption.title ? <><Label>Title:</Label><Details>{image.caption.title}</Details></> : null}
            {image?.caption.title ? <><Label>Year:</Label><Details>{image.caption.year}</Details></> : null}
            {image?.caption.title ? <><Label>Media:</Label><Details>{image.caption.media}</Details></> : null}
            {image?.caption.title ? <><Label>Dimensions:</Label><Details>{image.caption.dimensions}</Details></> : null}
          </Description>
          {image?.caption.title ? 
          <Description>
            <Label>Description:</Label>
            <p>{image?.description}</p>
          </Description> : null }
            
        </ImageContainer>
      </ViewContainer>
    </>
  );
};

export default Image;
