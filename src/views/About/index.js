import { Wrapper } from './Style';
import Image from '../../shared/components/SingleImage';

const About = ({ pageTitle, tagLine, aboutImage, description }) => {
  return (
    <Wrapper>
      <h6>{pageTitle}</h6>
      {tagLine ? <h6>{tagLine}</h6> : null}
      {aboutImage ? <Image src={aboutImage} /> : null}
      {description ? <p>{description}</p> : null}
    </Wrapper>
  );
};

export default About;
