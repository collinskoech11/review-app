import React  from 'react';
import NavPage from './Components/NavPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      
     <NavPage/>
     <Router>
      <Route path="/" component={Home}/>
      <Route/>
     </Router>
    </div>
  );
}

export default App;
