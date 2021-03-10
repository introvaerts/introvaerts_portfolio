import NormaliseStyles from './shared/styles/NormaliseStyles';
import BaseStyles from './shared/styles/BaseStyles';
import { useEffect, useState } from 'react';
import Api from './utils/Api';

import Wrapper from './shared/components/Wrapper';
import Navigator from './shared/components/Navigator';

const subdomainId = "60487bfca696095204ef991b";

function App() {
  const [subdomain, setSubdomain] = useState();

  // const subdomainName = window.location.hostname.split(".")[0];
  useEffect(() => {
    // axios.get(`https://introvaerts.com/api/subdomains/60487bfca696095204ef991b`)
    Api.testWithId(subdomainId)
       .then(res => {
         setSubdomain(res.data.data)
       })
       .catch(e => console.error(Error(e)))
  }, [])

  return (
    <div className="App">
      {subdomain ? <Wrapper>
        {/* global styles */}
        <NormaliseStyles />
        <BaseStyles />
        {/* {This is the content} */}
        <h1>{subdomain.subdomain.page_title}</h1>
        <Navigator 
          userDetails= {subdomain}
        />
        {/* <BrowserRouter>
          <About  />

          <MainRouter />
        </BrowserRouter> */}
      </Wrapper> : <Wrapper>Loading your page</Wrapper>}
    </div>
  );
}

export default App;
