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
import Index from "./views/Index.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";
import Register from "./views/examples/Register.jsx";
import Login from "./views/examples/Login.jsx";
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";
import NewCustomer from "./views/examples/new.jsx";
import Customers from "./views/examples/customer.jsx";
import Report from "./views/examples/report.jsx";



var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/add_new_customer",
    name: "NewCustomer",
    icon: "ni ni-circle-08 text-pink",
    component: NewCustomer,
    layout: "/admin"
  },
  {
    path: "/existing_customers",
    name: "Existing Customers",
    icon: "ni ni-collection text-blue",
    component: Customers,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "Reports",
    icon: "ni ni-single-copy-04 text-blue",
    component: Report,
    layout: "/admin"
  },
 
  
  
  
];
export default routes;
