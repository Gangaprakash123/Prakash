
import React, {Component} from 'react';
import './App.css';

import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux';
class App extends Component {

  render() {
   
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    );  
  }
}

export default App;
