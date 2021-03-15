import NormaliseStyles from './shared/styles/NormaliseStyles';
import BaseStyles from './shared/styles/BaseStyles';
import { useEffect, useState } from 'react';
import Api from './utils/Api';
import { BrowserRouter as Router } from 'react-router-dom';

import Icon from './shared/components/Icon';
import Wrapper from './shared/components/Wrapper';
import Navigator from './shared/components/Navigator';
import MainRouter from './navigation/MainRouter';
import Title from './shared/components/Title';

function App() {
  const [subdomain, setSubdomain] = useState();
  const [menuOpen, setMenuOpen] = useState(110);
  const [menuPlus, setMenuPlus] = useState('yes');

  const subdomainName = window.location.hostname.split('.')[0];
  document.title = subdomainName[0].toUpperCase() + subdomainName.slice(1);
  useEffect(() => {
    Api.getInfo(subdomainName)
      .then(res => {
        setSubdomain(res.data.data);
      })
      .catch(e => console.error(Error(e)));
  }, [subdomainName]);

  const handleOpen = () => {
    setMenuOpen(menuOpen === 110 ? 0 : 110);
    setMenuPlus(menuPlus === 'yes' ? 'no' : 'yes');
  };

  return (
    <div className="App">
      {subdomain ? (
        <Wrapper>
          {/* normalizing styles */}
          <NormaliseStyles />
          <BaseStyles />
          <Icon open={menuPlus} handleClick={handleOpen} />
          {/* {This is the content} */}
          <Router>
            <Navigator
              userDetails={subdomain}
              translate={menuOpen}
              clickHandler={handleOpen}
            />
            <MainRouter userDetails={subdomain} />
          </Router>
        </Wrapper>
      ) : (
        <Wrapper>Loading your page</Wrapper>
      )}
    </div>
  );
}

export default App;
