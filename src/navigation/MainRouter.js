import { Switch, Route } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Gallery from '../views/Gallery';
import Image from '../views/Image';

const MainRouter = ({ userDetails }) => {
  const { galleries, subdomain } = userDetails;
  const { contact, about, page_title } = subdomain;

  return (
    <Switch>
      <Route exact path="/about">
        <About
          pageTitle={page_title}
          tagLine={about?.tagline}
          aboutImage={about?.about_image_url}
          description={about?.description}
        />
      </Route>
      <Route exact path={'/galleries/:galleryName'} >
        <Gallery />
      </Route>
      <Route exact path={'/galleries/:name/:id'}>
        <Image />
      </Route>

      <Route exact path="/contact">
        <Contact
          firstName={contact?.first_name}
          lastName={contact?.last_name}
          contactTagline={contact?.contact_tagline}
          address={contact?.address}
          phoneNumber={contact?.phone_number}
          businessEmail={contact?.business_email}
        />
      </Route>
    </Switch>
  );
};

export default MainRouter;
