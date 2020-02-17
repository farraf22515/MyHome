import React from 'react';

import Home from './page/Home'
import Month from './page/Month'
import Setting from './page/Setting'
import ConvertToSheet from './page/ConverToSheet'

import Navbar from './component/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'

function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/month"><Month /></Route>
            <Route path="/setting"><Setting /></Route>
            <Route path="/convertToSheet"><ConvertToSheet /></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
