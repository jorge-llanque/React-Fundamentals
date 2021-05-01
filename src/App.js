import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../src/global.css'
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={CategoryList} />
        <Route exact path="/categories/category" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
