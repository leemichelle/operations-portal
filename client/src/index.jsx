import React from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Operations from './components/Operations.jsx';
import ClientsList from './components/ClientsList.jsx';
import Products from './components/Products.jsx';
import Invoice from './components/Invoice.jsx';

// ReactDOM.render(<Operations />, document.getElementById('operations'));

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Operations} />
      <Route path="/clients" component={ClientsList} />
      <Route path="/products" component={Products} />
      <Route path="/invoice" component={Invoice} />
    </Switch>
</Router>, document.getElementById('operations')
)