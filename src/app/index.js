import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Header from './header';
import Footer from './footer';
import ProjectList from './containers/project_list';

import '../styles/main.css';
import '../styles/header-footer.css';
import reducers from './reducers'

const createStoreWithMiddleWare = applyMiddleware()(createStore);

const App = () => (
  <div className = "root-div">
    <Header />
    <ProjectList />
    <Footer />
  </div>
)

ReactDOM.render(
  <Provider store = {createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
  , document.querySelector("#root"));
