import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Cataloge } from './pages/Cataloge';
import { Home } from './pages/Home';

function App() {
  return (
   <Router>
     <Switch>
      <Route path="/cataloge">
        <Cataloge/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
