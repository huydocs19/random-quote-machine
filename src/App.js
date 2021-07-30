import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import { AppWrapperContainer } from './store';


function App() {
  return (  
    <Provider store={store}>  
      <AppWrapperContainer />
    </Provider>
  );
}
export default App;
