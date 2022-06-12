import React, {Component} from 'react';
import ReduxForm from './ReduxForm';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import './App.css';
import dataReducer from './jsonData';


const reducers = combineReducers({
  form: formReducer,
  jsonDatas:dataReducer,
});

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
            <span className="logo">testForm</span>
          </header>
          <ReduxForm />
        </div>
      </Provider>
    );
  }
}

export default App;
