const BASKET_PRODUCT_ADD='BASKET_PRODUCT_ADD';
const BASKET_PRODUCT_DELETE='BASKET_PRODUCT_DELETE';

const basketProduct_add=function(id, price, name) {
  return {
    type: BASKET_PRODUCT_ADD,
    id: id,
    price: price,
    name: name
  };
}

const basketProduct_delete=function(id) {
  return {
    type: BASKET_PRODUCT_DELETE,
    id: id,
  };
}



export {
  basketProduct_add, BASKET_PRODUCT_ADD,
  basketProduct_delete, BASKET_PRODUCT_DELETE,
}
