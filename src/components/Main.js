require('normalize.css/normalize.css');
require('styles/App.css');
import Header from './main/Header';
import Body from './main/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

class AppComponent extends React.Component {
    render() {
      return (
      <div>
        <Header />
        <Body />
      </div>
      );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
