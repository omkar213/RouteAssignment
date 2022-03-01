import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import UserDetail from "./UserDetail";

function Routes(props) {
  // const [avtUrl, setAvtUrl] = useState("#");
  // const handleClick = (clickedUser) => {
  //   console.log("From App.js", clickedUser);
  //   setAvtUrl(clickedUser.avatar_url);
  // };

  const handleNav = (direction) => {
    if (direction === "back") props?.history?.goBack();
    else props?.history?.goForward();
  };

  return (
    <div>
      <div className="App">
        <Nav />
        <button onClick={() => handleNav("back")}>{"<= GO BACK"}</button>
        <button onClick={() => handleNav("fwd")}>{"GO FWD =>"}</button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          {/* <Route path="/shop" exact component={() => <Shop handleClick={handleClick} />} /> */}
          <Route path="/shop" exact component={Shop} />
          {/* <Route path="/shop/:id" component={() => <UserDetail avtUrl={avtUrl} />} /> */}
          <Route path="/shop/:id" component={UserDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(Routes);
