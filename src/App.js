import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  history,
  useRouteMatch,
} from "react-router-dom";

import Cars from './Cars';
import Boats from './Boats';
import Planes from './Planes';
import Trucks from './Trucks';

 
function App() {
  return ( 
    <Router>
      <div>
        <div class="header">
          <Link to="/cars"> cars </Link> |
          <Link to="/boats"> boats </Link> | 
          <Link to="/planes"> planes </Link>
        </div>
         
        
          <Route exact path="/" >
            <h1>Welcome home</h1>
          </Route>
       
          <Route exact path="/cars" component={Cars} >
           </Route>

          <Route path="/cars/:id" component={Cars} >
          </Route>

          <Route path="/planes">
           <Planes /> 
          </Route>

          <Route path="/trucks" render={(props) => <Trucks  {...props} stuff="yay" />} >
          </Route>

          <Route path="/:anything">
            <h1>404 page does not exist.</h1>  
          </Route>

         

      </div>
    </Router>
  );
}

export default App;
