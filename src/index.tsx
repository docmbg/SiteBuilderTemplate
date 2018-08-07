import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

ReactDOM.render(
  <HashRouter history={history}>
    <App />
  </HashRouter >,
  document.getElementById('root') as HTMLElement
);
