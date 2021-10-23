
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router} from 'react-router-dom';
import { Switch,Route,Link} from 'react-router-dom';

import IceCreamContainer from './components/IceCreamContainer';
import CoffeeContainer from './components/CoffeeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Buy Cake</Link>
          </li>
          <li>
            <Link to="/icecream">Buy IceCream</Link>
          </li>
          <li>
            <Link to="/coffee">Buy Coffee</Link>
          </li>
        </ul>
       
        <Switch>
            <Route exact path="/" >
              <NewCakeContainer />
            </Route>
            <Route  path="/icecream" >
             <IceCreamContainer />
            </Route>
            <Route exact path="/coffee">
              <CoffeeContainer />
            </Route>
        </Switch>

        </Router>
      </div>
    </Provider>
  );
}

export default App;
