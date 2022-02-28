import React, {useState, useEffect} from "react";
import "./App.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserDetail = (props) => {
  // const { id } = useParams();
  // console.log(id);
  // // filterBasedOnId
  const [userAvater,setAvatar] = useState([]);
  const {id} = useParams();
  const fetchDetails = () =>{
    fetch(`https://api.github.com/users/${id}`)
     .then(res => res.json())
     .then (json => setAvatar(json))
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <div>
        <h1>UserImage</h1>
        <strong>
          User ID: {id}
          <br />
        </strong>
        Image: <img className="usersImg" src={userAvater.avatar_url} alt="userImg" />
      </div>
    </>
  );
};

export default UserDetail;