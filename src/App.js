import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header"></div>
      <div className="app__body">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              <Chat />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
