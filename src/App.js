import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
