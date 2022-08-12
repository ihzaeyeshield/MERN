import { Provider } from 'react-redux';
import { Routes, store } from '../config';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
  // The <Provider> component makes the Redux store available to any nested components 
  // that need to access the Redux store (untuk membuat redux store, resdux store di folder config) 
}

export default App;
