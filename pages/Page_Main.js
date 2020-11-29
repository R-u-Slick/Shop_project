import React from 'react';
import MainPage from '../components/MainPage';
let items = require('../items.json');

class Page_Main extends React.PureComponent {
          
  render() {

    return (
      <MainPage items={items}/>
    );
  }
}
    
export default Page_Main;
    