import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './BasketPage.css';
import BasketProduct from './BasketProduct';

class BasketPage extends React.PureComponent {

  static propTypes = {
    basketProducts: PropTypes.array.isRequired //получено из Redux
  };

  state = {
    basketProducts: this.props.basketProducts,
  }


  summPrice = (basketProducts) => {
    if (basketProducts.length) {
    let summ = basketProducts.reduce((r, v)=>r+v.price*v.quantity, 0);
    return summ.toFixed(2);
    }
  }

  render() {
    var itemsCode = this.props.basketProducts.map(v =>
      <BasketProduct key={v.id} currentProduct={v} />
    )
    console.log('Basket rendered');
    return (
      <div className="basketPage">
        <div className="basketPage-title">
          Оформление заказа
        </div>
        <div className="basketPage-subtitle">
          Ваш заказ
        </div>
        {
          (!Boolean(this.props.basketProducts.length))&&
          <div className="no-products">Ваша корзина пуста</div>
        }
        <table className="basket-products">
          <tbody className="basket-table">
           {itemsCode}
          </tbody>
        </table>
        {
        (Boolean(this.props.basketProducts.length))&&
        <div className="basket-total">
          Итого: {this.summPrice(this.props.basketProducts)} руб.
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    basketProducts: state.basket.basketProducts,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(BasketPage);

