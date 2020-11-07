import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import NotFound from './components/NotFound/NotFound'
import "./index.css";
import Detail from './components/Detail/Detail';
import List from "./components/list/List";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component = {List} exact />
        <Route path="/currency/:id" component={Detail} exact/>
        <Route component={NotFound}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
