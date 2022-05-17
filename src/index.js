import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from '@src/serviceWorker';
import { Provider } from 'redux-bundler-react';
import createStore from '@bundles';
import cache from '@src/utils/cache';

cache.getAll().then((initialData) => {
  // Create the store to hold all of our data
  const store = createStore(initialData);

  // Render our app with the Provider at the top level
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  )
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
