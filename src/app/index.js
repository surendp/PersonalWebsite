import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';
import Projects from './projects';

import '../styles/main.css';

const App = () => (
  <div className = "root-div">
    <Header />
    <Projects />
    <Footer />
  </div>
)

ReactDOM.render(<App />, document.querySelector("#root"));
