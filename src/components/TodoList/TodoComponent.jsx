import { useParams } from "react-router-dom"
import { useAuth } from "../../security/Authcontext";
import { useEffect, useState } from "react";
import { retrieveTodoApi } from "../../api/TodoApiService";

const TodoComponent = () => {
    const {id} = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [desc, setDesc] = useState('');


    useEffect(
        ()=>{
            retrieveTodo()
        }
        ,[id])
    function retrieveTodo(){
        retrieveTodoApi(username, id)
          .then((response) =>
        {
            setDesc(response.data.description);
        })
          .catch((error) => console.log(error));
    }
  return (
    <>
        <h1>Enter Todo details</h1>
        <p>Description: {desc}</p>
    </>
  )
}
export default TodoComponent