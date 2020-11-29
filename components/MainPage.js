import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Filter from './Filter'
import {mainPageEvents} from './events';

import './MainPage.css';

class MainPage extends React.PureComponent {

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
   items: this.props.items.sort((a, b) => a.name > b.name ? 1 : -1),
   filteredItems: this.props.items,
   sortMode: "name"
 }

 componentDidMount = () => {
  mainPageEvents.addListener('applyFilter',this.applyFilter);
};

componentWillUnmount = () => {
  mainPageEvents.removeListener('applyFilter',this.applyFilter);
};

applyFilter = (filter) => {
  let filtered=[...this.state.items];
  if (filter.type&&(filter.type!=='all')) {
    filtered=filtered.filter(v => v.type===filter.type);
  }
  if (filter.minPrice) {
    filtered=filtered.filter(v => v.price>=filter.minPrice);
  }
  if (filter.maxPrice) {
    filtered=filtered.filter(v => v.price<=filter.maxPrice);
  }
  if (filter.minWeight) {
    filtered=filtered.filter(v => v.weight>=(filter.minWeight/1000));
  }
  if (filter.maxWeight) {
    filtered=filtered.filter(v => v.weight<=(fsilter.maxWeight/1000));
  }

  this.setState({filteredItems: this.sort(filtered, this.state.sortMode)});
}

sortModeChanged = (EO) => {
  this.setState({sortMode: EO.target.value});
  let sorted=[...this.state.filteredItems];
  sorted=this.sort(sorted, EO.target.value);
  this.setState({filteredItems: sorted});
}

sort = (unsorted, sortMode) => {
  let sorted;
  if (sortMode==="name") {
    sorted = unsorted.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  if (sortMode==="type") {
    sorted = unsorted.sort((a, b) => a.type > b.type ? 1 : -1);
  }
  if (sortMode==="priceToMin") {
    sorted = unsorted.sort((a, b) => a.price > b.price ? -1 : 1);
  }
  if (sortMode==="priceToMax") {
    sorted = unsorted.sort((a, b) => a.price > b.price ? 1 : -1);
  }
  if (sortMode==="weightToMin") {
    sorted = unsorted.sort((a, b) => a.weight > b.weight ? -1 : 1);
  }
  if (sortMode==="weightToMax") {
    sorted = unsorted.sort((a, b) => a.weight > b.weight ? 1 : -1);
  }
  return sorted;
}

render() {
    var itemsCode = this.state.filteredItems.map(v =>
      <Product key={v.id} currentProduct={v} />
    )
    console.log('MainPage Render');
    return (
      <div className="page-body">
        <div className="page-body__info">
          <Filter/>
          <div className="main-content">
            <div className="sort">
              <select onChange={this.sortModeChanged} defaultValue="name">
                <option value="name" >Сортировать по имени</option> 
                <option value="type" >Сортировать по типу</option> 
                <option value="priceToMin" >По убыванию цены</option>
                <option value="priceToMax" >По возрастанию цены</option>
                <option value="weightToMin">По убыванию веса</option> 
                <option value="weightToMax">По возрастанию веса</option>                      
              </select>
            </div>
            <div className="products">
              {
                (!Boolean(this.state.filteredItems.length))&&
                <div className="wrong-filter"> Упс! У нас нет таких товаров, попробуйте изменить условия поиска </div>
              }
              {itemsCode}
            </div>
          </div>
        </div>
      </div>
    )
    ;

  }

}

export default MainPage;
