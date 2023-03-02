import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';
import Create from './components/Create'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light'); 
  
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#212529"
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <Router>
      <div className={`App bg-${mode}`}>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div className="content">
          <Switch>
          <Route exact path="/">
            <Home mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/create">
            <Create mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails mode={mode}/>
          </Route>

          <Route path="*">
            <NotFound mode={mode}/>
          </Route>

          </Switch>
          <Footer mode={mode} toggleMode={toggleMode}/>
          
        </div>
      </div>
    </Router>
  );
}

export default App;