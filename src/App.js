import React from 'react';
  import { BrowserRouter as Router, Route } from 'react-router-dom';
  import WebSiteIndex from './pages/website/index';
  import ForumIndex from './pages/forum/index';
  import MiningPool from './pages/mining/pool';
// import Page3 from './Page3';
// import Page4 from './Page4';
// import Cfx from './Cfx';

class App extends React.Component {
  render() {
    return (
      
      <Router >
        <div class="breeze-app">
          <Route exact path="/" component={WebSiteIndex} /> 
          <Route path="/pages/forum/index" component={ForumIndex} /> 
          <Route path="/pages/mining/pool" component={MiningPool} /> 
        </div>
      </Router>
    )
  }
}
export default App;