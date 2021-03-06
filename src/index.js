import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  // 中间件，记录日志
  composeWithDevTools(
    applyMiddleware(logger)
  )
)


ReactDOM.render(
  <Provider store={ store }>
    <React.Fragment>
      <Header />
        <App />
      <Footer />
    </React.Fragment>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
