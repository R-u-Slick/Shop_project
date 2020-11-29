import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {basketProduct_add} from '../redux/basketAC';

import './Product.css';

class Product extends React.PureComponent{

  static propTypes = {
    currentProduct: PropTypes.shape({
      id:  PropTypes.number.isRequired,
      type:  PropTypes.string.isRequired,
      name:  PropTypes.string.isRequired,
      price:  PropTypes.number.isRequired,
      weight:  PropTypes.number.isRequired,
      img:  PropTypes.string.isRequired,
      info:  PropTypes.string.isRequired,      
    })
  };

  addToBasket = () => {
    this.props.dispatch(basketProduct_add(this.props.currentProduct.id, Number(this.props.currentProduct.price.toFixed(2)), this.props.currentProduct.name) );
  }

  render() {
    console.log('Product'+this.props.currentProduct.id+'render')
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={this.props.currentProduct.img}/>
        </div>
        <div className="product-name">{this.props.currentProduct.name}</div>
        <div className="product-buy">
          <div className="product-price">{this.props.currentProduct.price}</div>
          <input type="button" value="В корзину" className="button-basket" onClick={this.addToBasket}/>
        </div>
        <div className="product-weight">
          {this.props.currentProduct.weight*1000} г
        </div>
        <div className="product-info">
          {this.props.currentProduct.info}
        </div>
      </div>
    )
  }
}

export default connect()(Product);

