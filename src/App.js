import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../src/global.css'
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import PrivateRoute from './routes/PrivateRoute'


/*
 exact -> Buscan una ruta que sea exacto a lo que pide
*/
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route exact path="/categories" component={CategoryList} />
        <Route exact path="/categories/category" component={Category} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/payments" component={Payments} />
        
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
