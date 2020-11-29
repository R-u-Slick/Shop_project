import React from 'react';
import { Route } from 'react-router-dom';
import Page_Main from './Page_Main';
import Page_Info from './Page_Info';
import Page_Delivery from './Page_Delivery';
import Page_Basket from "./Page_Basket";

class PagesRouter extends React.Component {
          
  render() {


    return (
      <div>
        <Route exact path="/" component={Page_Main} />
        <Route path="/info" component={Page_Info} />
        <Route path="/delivery" component={Page_Delivery} />           
        <Route path="/basket" component={Page_Basket} />
      </div>
    );
    
  }

}
    
export default PagesRouter;