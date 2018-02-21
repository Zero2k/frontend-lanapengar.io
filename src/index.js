import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';
import client from './apollo';
import store from './store';

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
