import React from "react";
import "./App.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserDetail = (props) => {
  const { id } = useParams();
  console.log(id);
  // filterBasedOnId
  return (
    <>
      <div>
        <h1>UserImage</h1>
        <strong>
          User ID: {id}
          <br />
        </strong>
        Image: <img className="usersImg" src={id.url} alt="userImg" />
      </div>
    </>
  );
};

export default UserDetail;
