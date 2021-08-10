import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import Cataloge from './pages/Cataloge';
import Product from './pages/Product';
import { Footer } from './components/Footer';

function App() {
  return (
   <Router>
      <Navbar/>
      <Switch>
        <Route path="/cataloge/:id">
          <Product/>
        </Route>
        <Route path="/cataloge">
          <Cataloge/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
