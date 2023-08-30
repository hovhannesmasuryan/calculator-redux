import { Provider} from 'react-redux';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calculator />
      </Provider>  
    </div>
  );
}

export default App;
