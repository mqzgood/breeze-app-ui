import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WebSiteIndex from './pages/website/index';
// import ForumIndex from './pages/forum/index';
import MiningPool from './pages/mining/pool';
import Bnft from './pages/nft/index';
import Stats from './pages/stats/index';
import Faq from './pages/faq/index';
import Dao from './pages/dao/index'; 
// import store from '@/store'

class App extends React.Component {
  render() {
    return (

      // <Router  basename="/breeze-app-ui">
      <Router>
        {/* <Provider store={store}> */}
          <div class="breeze-app">
            <Route exact path="/" component={WebSiteIndex} />
            <Route path="/pages/stats/index" component={Stats} />
            <Route path="/pages/faq/index" component={Faq} />
            <Route path="/pages/dao/index" component={Dao} />
            <Route path="/pages/mining/pool" component={MiningPool} />
            <Route path="/pages/nft/index" component={Bnft} />
          </div>
        {/* </Provider> */}
      </Router>
    )
  }
}
export default App;