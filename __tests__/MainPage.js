import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

import './MainPage.css';

class MainPage extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
       id:  PropTypes.number.isRequired,
       type:  PropTypes.string.isRequired,
       name:  PropTypes.string.isRequired,
       price:  PropTypes.number.isRequired,
       weight:  PropTypes.number.isRequired,
       img:  PropTypes.string.isRequired,
       info:  PropTypes.string.isRequired,      
     })
    )
 };

 state = {
   items: this.props.items,
 }

  render() {
    var itemsCode = this.state.items.map(v =>
      <Product key={v.id} id={v.id} type={v.type} name={v.name} price={v.price} weight={v.weight}
      img={v.img}  info={v.info}
      />
    )
    return (
      <div className="main-page">
        {itemsCode}
      </div>
    )
    ;

  }

}

export default MainPage;
