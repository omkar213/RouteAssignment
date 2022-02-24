import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import UserDetail from "./UserDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const list=get(URL);

  // const handleClick=(id)=>{
  // 	list.filter(id)//
  // 	//{avturl, id,...}
  // 	//setAvtUrl(avtUrl)
  // }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route
              path="/shop"
              exact
              component={() => (
                <Shop
                // list={list} handleClick={handleClick}
                />
              )}
            />
            <Route
              path="/shop/:id"
              component={() => (
                <UserDetail
                // AvtUrl={AvtUrl}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
