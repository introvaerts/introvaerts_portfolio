import Image from '../../shared/components/SingleImage';
import SecondaryTitle from '../../shared/components/SecondaryTitle';
import ViewContainer from '../../shared/components/ViewContainer';
import { Paragraph } from './Style';

const About = ({ pageTitle, tagLine, aboutImage, description }) => {
  return (
    <>
      <SecondaryTitle text={pageTitle}/>
      <ViewContainer>
        {tagLine ? <h3>{tagLine}</h3> : null}
        {aboutImage ? <Image src={aboutImage} alt="About Image"/> : null}
        {description ? 
        <>
          {description.split("\n").map(piece => {
            return <Paragraph>{piece}</Paragraph>

          })}
        </> : null}
      </ViewContainer>
    </>
  );
};

export default About;
