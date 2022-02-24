import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    // const URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
    const URL = "https://api.github.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((user) => setuserlist(user))
      .catch((err) => console.log(err));
  }, []);

  const renderUserList = (userlist) => {
    if (userlist?.length > 0) {
      return (
        <div>
          {userlist.map((user) => (
            <h2 
            // onClick={() => props.handleClick(user.id)}
            >
              <Link to={`/shop/${user.id}`} key={user.id}>
                {user.login}
              </Link>
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

export default Shop;

//'/shop/${user.id}'
