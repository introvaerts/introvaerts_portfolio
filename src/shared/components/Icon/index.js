import { IconContainer, AbsoluteImage } from './Styles';

const Icon = ({ open, handleClick }) => {
  return (
    <IconContainer onClick={handleClick}>
      {open === "yes" ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><rect width="46" height="46" fill="none"/><path d="M36,20.571H20.571V36H15.429V20.571H0V15.429H15.429V0h5.143V15.429H36Z" transform="translate(5 5)"/></svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"><rect width="43" height="43" fill="none"/><path d="M33,3.324,29.676,0,16.5,13.176,3.324,0,0,3.324,13.176,16.5,0,29.676,3.324,33,16.5,19.824,29.676,33,33,29.676,19.824,16.5Z" transform="translate(5 5)"/></svg>
      }
    </IconContainer>
  );
};

export default Icon;
