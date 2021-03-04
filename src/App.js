import React from 'react';
import {Route,Switch} from 'react-router-dom';
//Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import Nav from './components/Nav';
import AboutMePage from './pages/AboutMePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <ScrollToTop/>
      <Nav/>
        <Switch>
          <Route path="/" exact>
              <AboutMePage/>  
          </Route>
          <Route path="/projects">  
              <Projects/> 
          </Route>
          <Route path="/contact"> 
              <Contact/>  
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
