import { combineReducers } from 'redux';

import basketReducer from "./basketReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем basket
    basket: basketReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
