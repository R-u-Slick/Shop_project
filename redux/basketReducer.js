import {BASKET_PRODUCT_ADD} from './basketAC';
import {BASKET_PRODUCT_DELETE} from './basketAC';

const initState={
  basketProducts: [],
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function basketReducer(state=initState,action) {
  switch (action.type) {

    case BASKET_PRODUCT_ADD: {
      if (state.basketProducts.some((item)=>item.id===action.id)) {
        let newState={...state,
          basketProducts:[...state.basketProducts]
        };
        let arrayIndex = newState.basketProducts.findIndex(item => item.id === action.id);
        let newHash = {...newState.basketProducts[arrayIndex]};
        let quantity = newHash.quantity+1;
        newHash={...newHash, quantity:quantity};
        newState.basketProducts=newState.basketProducts.slice();
        newState.basketProducts.splice(arrayIndex,1,newHash);
        return newState;       
      }
      else {
        let newState={...state,
          basketProducts:[...state.basketProducts]
        };
        let newProduct={};
        newProduct.id=action.id;
        newProduct.quantity=1;
        newProduct.price=action.price;
        newProduct.name=action.name;
        newState.basketProducts.push(newProduct);
        return newState;
      }
    }

    case BASKET_PRODUCT_DELETE: {
      let newState={...state,
        basketProducts:[...state.basketProducts]
      };
      let arrayIndex = newState.basketProducts.findIndex(item => item.id === action.id);
      let newHash = {...newState.basketProducts[arrayIndex]};
      if (newHash.quantity>0) {
        let quantity = newHash.quantity-1;
        newHash={...newHash, quantity:quantity};
        newState.basketProducts=newState.basketProducts.slice();
        newState.basketProducts.splice(arrayIndex,1,newHash);
      }
      return newState;       
    }

    
    default:
      return state;
  }
}

export default basketReducer;
