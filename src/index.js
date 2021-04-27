import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState, reducer } from './context/Reducer';
import { StateProvider } from './context/StateProvider';
// import { StateProvider } from './context/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
