import React  from 'react';
import NavPage from './Components/NavPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      
     <NavPage/>
     <Router>
      <Route path="/Home"/>
     </Router>
    </div>
  );
}

export default App;
