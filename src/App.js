import logo from './logo.svg';
import './App.css';
import RandomUser from './components/RandomUser';
import store from './features/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
      <RandomUser/>
     </Provider>
    </div>
  );
}

export default App;
