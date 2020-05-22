import React from 'react';
import logo1 from './logo.svg';
import logo from './images/logo.svg'
import arrow1 from './images/arrow1.svg'
import arrow2 from './images/arrow2.svg'
import murtaza from './images/murtaza.png'
import './App.css';
import $ from "jquery";

function App() {
  return (
    <div className="App">
      <section>
        <div className="hero-container">
          <img src={arrow1} className="arrow arrow1"></img>
          <img src={arrow2} className="arrow arrow2"></img>
          <img src={arrow1} className="arrow arrow3"></img>
          <img src={arrow2} className="arrow arrow4"></img>
          <img src={arrow1} className="arrow arrow5"></img>
          <img src={arrow2} className="arrow arrow6"></img>
          <div className="hero">
            <h1>Hi, {"I'm Murtaza 👋🏽"}</h1>
            <h2>{"I’m a product designer at"} <a href="https://transferwise.com" className="highlight">TransferWise</a>. {"I design things to help solve problems for people. Sometimes I"} <a href="https://medium.com/@murtz_abidi" className="highlight">write </a>{"about things I care about. And I shout about things on "}<a href="https://twitter.com/murtz_abidi" className="highlight">twitter</a>.</h2>
          </div>
        </div>
      </section>
      <section className="about-container">
        <div className="about">
          <div className="description">
            <h3>About me</h3>
            <p>
              {"I've been designing things for the internet for almost 8 years. It started with "} <a href="https://casseroleclub.com" className="highlight2">Casserole Club</a> {"at FutureGov. Since then I've worked in agencies, corporates and startups learning a lot along the way."}
            </p>
            <br/>
              <p>
                {"I'm passionate about representation and started"} <a href="https://muslamicmakers.com" className="highlight2">Muslamic Makers</a> {"to help my community."}
              </p>

              <br/>
              <p>{"Here's where you can find my"} <a href="https://drive.google.com/drive/folders/0ByFB_YO-8JPINEM2MHJfbWpHVm8" className="highlight2">CV and Portfolio.</a></p>
            <br/>
            <p>
              {"Get in touch by"} <a href="mailto://murtaza.s.abidi@gmail.com" className="highlight2">email</a> or <a href="https://twitter.com/murtz_abidi" className="highlight2">@murtz_abidi</a>.
            </p>



            </div>
            <div className="photo">
              <img src={murtaza}></img>
            </div>
        </div>
      </section>
    </div>
  );
}



export default App;
