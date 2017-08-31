import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:9000/graphql'
});

const client = new ApolloClient({
          networkInterface
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
