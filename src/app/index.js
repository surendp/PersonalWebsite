import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';
import ProjectList from './components/projectList';

import '../styles/main.css';
import '../styles/header-footer.css';

const App = () => (
  <div className = "root-div">
    <Header />
    <ProjectList />
    <Footer />
  </div>
)

ReactDOM.render(<App />, document.querySelector("#root"));
