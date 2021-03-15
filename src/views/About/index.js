import Image from '../../shared/components/SingleImage';
import SecondaryTitle from '../../shared/components/SecondaryTitle';
import ViewContainer from '../../shared/components/ViewContainer';

const About = ({ pageTitle, tagLine, aboutImage, description }) => {
  return (
    <>
      <SecondaryTitle text={pageTitle}/>
      <ViewContainer>
        {tagLine ? <h6>{tagLine}</h6> : null}
        {aboutImage ? <Image src={aboutImage} /> : null}
        {description ? <p>{description}</p> : null}
      </ViewContainer>
    </>
  );
};

export default About;
