import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import reducer from './redux/reducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import NavBar from './containers/NavBar';

const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
