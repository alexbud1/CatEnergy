import './App.css'; 
import HomeTitle from './components/home_title';
import HeaderLogo from './components/logo';
import NavBar from './components/navbar';
import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from "react";
import FirstCat from './components/first_cat';
import SecondCat from './components/second_cat';
import HowItWorks from './components/how_it';

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="App">

      <div className="first_block">
        <div className="first_block_left">


          <div className="header_logo pcV">
            <HeaderLogo></HeaderLogo>
          </div>

          <div className="header_tablet">
            <div className="header_logo tabletV">
              <HeaderLogo></HeaderLogo>
            </div>
            <div className="header_tablet_navbar tabletV">
              <NavBar></NavBar>
            </div>

          </div>
          
          <div className="title_block tabletV">
            <div className="title_container tabletV">
              <HomeTitle></HomeTitle>
            </div>
            <img className="bucket" src={require('./assets/index-can.png')} />

          </div>

          <div className="title_container pcV">
            <HomeTitle></HomeTitle>
          </div>

        </div>
        
        <div className="first_block_right pcV">
          <div className="navbar_home">
            <NavBar></NavBar>
          </div>
          <img className="bucket" src={require('./assets/index-can.png')} />
        </div>

        

      </div>  

      


      <div className="mobile_block mobileV">
        <div className="mobile_header">
          <img className="logo_mobile" src={require('./assets/logo-mobile.png')} />
          <img className="logo2_mobile" src={require('./assets/logo2-mobile.png')} />
          <div className="burger">
            <Hamburger toggled={isOpen} toggle={setOpen} size={48} />
          </div>
        </div>
        <div className="mobile_main">
          <img className="bg_mobile" src={require('./assets/index-background-desktop.png')} />
          <div className="title_container">
            <HomeTitle></HomeTitle>
          </div>
          <img className="bucket" src={require('./assets/index-can.png')} />

        </div>
      </div>



      <div className="second_block">
        <div className="first_cat">
          <FirstCat></FirstCat>
        </div>
        <div className="second_cat">
          <SecondCat></SecondCat>
        </div>
      </div>



      <div className="third_block">
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
}

export default App;
