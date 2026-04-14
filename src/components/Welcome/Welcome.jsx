import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {
  retriveHelloWorldBean,
  retrievePathVariablebean,
} from "../../api/HelloWorldBean";

const Welcome = () => {
  const { username } = useParams(); //retrievePathVariablebean
  const [message, setMessage] = useState("");
  function handleRequest() {
    // retriveHelloWorldBean()
    //   .then((response) => {
    //     onSuccess(response);
    //   })
    //   .catch((error) => {
    //     onError(error);
    //   });

    retrievePathVariablebean(username)
      .then((response) => {
        onSuccess(response);
      })
      .catch((error) => {
        onError(error);
      });
  }
  function onSuccess(response) {
    console.log(response);
    setMessage(response.data.message);
  }

  function onError(error) {
    console.log(error);
  }
  return (
    <>
      <h2>Welcome, {username}</h2>
      <div>
        Manage your todos <Link to="/todos">here</Link>
      </div>
      <button className="btn btn-primary" onClick={handleRequest}>
        api request
      </button>
      <div>{message}</div>
    </>
  );
}
export default Welcome;