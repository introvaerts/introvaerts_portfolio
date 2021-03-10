import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../views/About'
import Contact from '../views/Contact'
import Gallery from '../views/Gallery'


const MainRouter = ({galleries}) => {
  
  return(
    <Switch>
      <Route exact path='/about'>
        <About
          // userDetails={userDetails}
        />
      </Route>
      <Route exact path='/contact' component={Contact} />
      {galleries.map((gallery) => {
        return <Route exact path={`/galleries/${gallery.name}`}>
          <Gallery galleryId={gallery._id} />
        </Route>
      })}
    </Switch>
  )
};

export default MainRouter;
