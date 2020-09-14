import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

// this is the router of this application
// can now use routing features of the package anywhere in the wrapping component
// in this case, the blog
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
