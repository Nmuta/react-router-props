import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Cars from './Cars';
import Autos from './Autos';

import Planes from './Planes';
import Aircraft from './Aircraft';

import Trucks from './Trucks';
import Boats from './Boats';

 
function App() {
  return ( 
    <Router>

      
      <div>
        <div className="header">
          <Link to="/cars"> cars </Link>  | 
          <Link to="/autos"> autos </Link>  |
          <Link to="/boats"> boats </Link>  | 
          <Link to="/trucks"> trucks </Link>  |
          <Link to="/planes"> planes </Link>  |
          <Link to="/aircraft"> aircraft </Link> 
        </div>
         
        <Switch>
            <Route exact path="/" >
              <h1>Learn React</h1>
            </Route>
        
            <Route exact path="/cars" component={Cars} >
            </Route>

            <Route exact path="/autos" component={Autos} >
            </Route>

            <Route path="/cars/:id">
              <Cars />
            </Route>

            <Route exact path="/planes" render={  (props) => <Planes name="Boeing" {...props} />} >
            </Route>

            <Route exact path="/aircraft">
             <Aircraft /> 
            </Route>
            
            <Route exact path="/trucks">
              <Trucks />
            </Route>

            <Route exact path="/boats">
              <Boats />
            </Route>

            <Route path="/:anything">
              <h1>404 page does not exist.</h1>  
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
