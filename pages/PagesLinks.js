import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="pages-links">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">меню</NavLink>
        <NavLink to="/info" className="PageLink" activeClassName="ActivePageLink">информация</NavLink>
        <NavLink to="/delivery" className="PageLink" activeClassName="ActivePageLink">зона доставки</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    