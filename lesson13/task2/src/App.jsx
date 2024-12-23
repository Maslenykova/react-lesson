import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './Home';
import Products from "./Products";

const App = () => {
    return(
        <div class="page">
            <BrowserRouter>
                <ul class="navigation">
                   <li class="navigation__item">
                <Link to='/'>Home</Link>
                  </li>
                  <li class="navigation__item">
                  <Link to='/products'>Products</Link>
                 </li>
                 </ul>
             <Route exact path="/"><Home /></Route>
             <Route path="/products" component={Products}/>
            </BrowserRouter>
         </div>
    )
}

export default App;