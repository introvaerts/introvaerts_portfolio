import MainRouter from '../../../navigation/MainRouter';
import Wrapper from '../../components/Wrapper';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { StyledLink } from './Styles';


const Navigator = ({userDetails}) => {
  const { galleries } = userDetails; 

  return(
    <Wrapper>
      <Router>
        <Link to='/about'><StyledLink>About</StyledLink></Link>
        {galleries?.map((gallery, index) => {
          return <Link key={index} to={`/galleries/${gallery.name}`}><StyledLink>{gallery.name}</StyledLink></Link>  
        })}
        <Link to='/contact'><StyledLink>Contact</StyledLink></Link>
        
        <MainRouter userDetails={userDetails} />
      </Router>
    </Wrapper>
  )
}

export default Navigator;