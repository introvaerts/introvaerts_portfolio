import MainRouter from '../../../navigation/MainRouter';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { StyledLink } from './Styles';


const Navigator = ({userDetails}) => {
  const { galleries } = userDetails; 
  
  return(
    <Router>
      <Link to='/about'><StyledLink>About</StyledLink></Link>
      <Link to='/contact'><StyledLink>Contact</StyledLink></Link>
      {galleries?.map((gallery) => {
        return <Link to={`/galleries/${gallery.name}`}><StyledLink>{gallery.name}</StyledLink></Link>  
      })}
      
      <MainRouter galleries={galleries} />
    </Router>
  )
}

export default Navigator;