import React from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import Todos from './components/Todos'
import Form from './components/Form'
import './App.css';
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <img src={logo} alt={logo} classname="App-logo" />
        <h1>belajar redux</h1>
        <Todos />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
