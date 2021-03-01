import React from 'react';
import {Route,Switch} from 'react-router-dom';
//Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import Nav from './components/Nav';
import AboutMePage from './pages/AboutMePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <GlobalStyle/>
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
    </div>
  );
}

export default App;
