import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>

      <BrowserRouter>
      <Header />
      
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;