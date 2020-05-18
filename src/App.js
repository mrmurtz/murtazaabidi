import React from 'react';
import logo1 from './logo.svg';
import logo from './images/logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>
        <a href="" className='logo'>✌🏽 Murtaza Abidi</a>
        <div className="navigation-items">
          <a href="" className="item">About</a>
          <a href="" className="item">Projects</a>
        </div>
      </nav>

      <section>
        <div className="hero">
          <h1>{"Hi, I'm Murtaza."}</h1>
          <h2>{"I'm a product designer at"} <a href="https://transferwise.com" className="highlight">TransferWise</a>. {"I design things to help solve problems for people. Sometimes I write about things I care about. And I shout about things on twitter too"}.</h2>
        </div>
      </section>

      <footer>
        <a href="https://twitter.com/murtz_abidi">Twitter</a>
      </footer>
    </div>
  );
}

export default App;
