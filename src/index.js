import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Purchase from './views/purchase';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from './views/customerPurchase';
import PayProduct from './views/payProduct';
import ProcessPayment from './views/processPayment';
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={App} />
   <Route path="/purchase" component={Purchase} />
   <Route path="/comment" component={Detail} />
   <Route path="/payProduct" component={PayProduct} />
   <Route path="/processPayment" component={ProcessPayment} />
 </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
