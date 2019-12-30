/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./Task/assets/vendor/nucleo/css/nucleo.css";
import "./Task/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./Task/assets/scss/argon-dashboard-react.scss";
import Login from "./Task/views/examples/Login";
import Register from "./Task/views/examples/Register";
import Profile from './Task/views/examples/Profile'

import AdminLayout from "./Task/layouts/Admin.jsx";
import AuthLayout from "./Task/layouts/Auth.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/customer_profile/:id" component={Profile} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
