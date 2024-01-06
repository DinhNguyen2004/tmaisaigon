import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Fixbar from './/components/Fixbar/Fixbar';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Bussines from './pages/Bussines/Bussines.jsx';
import Events from './pages/Events.jsx';
import Activities from './pages/Activities/Activities.jsx';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  
  const [windowSide, setWindowSide] = useState({
    width: undefined,
    height: undefined
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSide({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize)
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  },[]);


  // 870 laptop, 768-870 ipad, < 768 iphone
  useEffect(() => {
    // console.log(windowSide)
    if(windowSide.width < 870) {
      setIsMobile(true);
    }
    
    else {
      setIsMobile(false)
    }
  },[windowSide]);
  
  return (
      <div className="App">
      <Router>
        <Navbar isMobile={isMobile} className="z-10"/>  
        <Switch>
      
          <Route path="/" exact>
            <Home isMobile={isMobile}/>
          </Route>
          <Route path="/business" >
            <Bussines isMobile={isMobile}/>
          </Route>
          <Route path="/events" >
            <Events isMobile={isMobile}/>
          </Route>
          <Route path="/activities" >
            <Activities isMobile={isMobile}/>
          </Route>
          <Route path="/contact" >
            <Contact  isMobile={isMobile}/>
          </Route>
           
        </Switch>
        <Fixbar isMobile={isMobile}/>
        <Footer isMobile={isMobile} />    
      </Router>
    </div>
  )
}

export default App
