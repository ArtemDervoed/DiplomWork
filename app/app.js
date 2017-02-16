import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'sanitize.css/sanitize.css';
import HomePage from 'containers/HomePage/index.js';
import Registration from 'containers/Registration/index.js';
import Login from 'containers/Login/index.js';
import User from 'containers/User/index.js';
import Error from 'containers/Error/index.js';
import Successful from 'containers/Successful/index.js';
import App from 'containers/App/index.js';
import LanguageProvider from 'containers/LanguageProvider';
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
import {store} from './store';
import { translationMessages } from './i18n';
import './global-styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

const initialState = {};
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();
ReactDOM.render(
  <Provider store= {store}>
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/login" component={Login}/>
      <Route path="/login/error" component={Error}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/registration/error" component={Error}/>
      <Route path="/registration/successful" component={Successful}/>
      <Route path="/user" component={User}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
// if (!window.Intl) {
//   (new Promise((resolve) => {
//     resolve(import('intl'));
//   }))
//     .then(() => Promise.all([
//       import('intl/locale-data/jsonp/en.js'),
//     ]))
//     .then(() => render(translationMessages))
//     .catch((err) => {
//       throw err;
//     });
// } else {
//   render(translationMessages);
// }

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
