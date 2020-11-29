"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from './redux/reducers.js';
import PageHeader from './components/PageHeader';
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

let store=createStore(combinedReducer);

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <div>
          <PageHeader/>
          <PagesLinks />
          <PagesRouter/>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('container') );
