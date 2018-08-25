import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AddVaccine from './pages/addVaccine';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';

const App = () => {
  // server.com/#/
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addVaccine" component={AddVaccine} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('App'));
