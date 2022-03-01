import React from "react";
import "./App.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserDetail = (props) => {
  const { id } = useParams();
  const his = useHistory();

  return (
    <>
      <div>
        <h1>UserImage</h1>
        <strong>
          User ID: {id}
          <br />
        </strong>
        {/* Image: <img className="usersImg" src={props.avtUrl} alt="userImg" /> */}
        Image: <img className="usersImg" src={his.location.state.imgUrl} alt="userImg" />
      </div>
    </>
  );
};

export default UserDetail;
