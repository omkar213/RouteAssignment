import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

const Shop = (props) => {
  const [userlist, setuserlist] = useState([]);

  // Fetching all users
  useEffect(() => {
    // const URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
    const URL = "https://api.github.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((user) => setuserlist(user))
      .catch((err) => console.log(err));
  }, []);

  const handleUserClick = (user) => {
    console.log(props.history);
    // props.handleClick(user);
    const obj = {
      imgUrl: user.avatar_url,
    };
    props.history.push(`/shop/${user.id}`, obj);
  };

  const renderUserList = (userlist) => {
    if (userlist?.length > 0) {
      return (
        <div>
          {userlist.map((user) => (
            <h2 key={user.id} onClick={() => handleUserClick(user)}>
              {user.login}
            </h2>
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <div>{renderUserList(userlist)}</div>
    </>
  );
};

export default withRouter(Shop);
