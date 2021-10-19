import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CoffeeContainer from './components/CoffeeContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CoffeeContainer />
      </div>
    </Provider>
  );
}

export default App;
