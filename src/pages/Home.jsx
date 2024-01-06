
import React from 'react';
import Slogan from './../components/Slogan/Slogan';
import Content from './../components/Content/Content';



// import { useState, useEffect } from 'react';
function Home(props) {
  
  const {isMobile} = props
  return (
    <div className="font-opensans">
      <Slogan isMobile={isMobile} />   
      <Content isMobile={isMobile}/>
    </div>
  );
}

export default Home;
