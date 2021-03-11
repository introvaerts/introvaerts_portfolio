import { BrowserRouter as Router, Link } from 'react-router-dom';
import { StyledLink, Menu } from './Styles';

const Navigator = ({ userDetails, translate, clickHandler }) => {
  const { galleries } = userDetails;

  return (
    <Menu translate={translate} onClick={clickHandler}>
      <Link to="/about">
        <StyledLink>About</StyledLink>
      </Link>
      {galleries?.map((gallery, index) => {
        return (
          <Link key={index} to={`/galleries/${gallery.name}`}>
            <StyledLink>{gallery.name}</StyledLink>
          </Link>
        );
      })}
      <Link to="/contact">
        <StyledLink>Contact</StyledLink>
      </Link>
    </Menu>
  );
};

export default Navigator;
