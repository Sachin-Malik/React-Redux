
import { Provider } from 'react-redux';
import store from './redux/store';

import IceCreamContainer from './components/IceCreamContainer';
import CoffeeContainer from './components/CoffeeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NewCakeContainer />
        <IceCreamContainer />
        <CoffeeContainer />
      </div>
    </Provider>
  );
}

export default App;
