import { useState, useEffect } from "react";
import { retirieveTodos, deleteTodoApi } from "../../api/TodoApiService";
import { useAuth } from "../../security/Authcontext";
import { useNavigate } from "react-router-dom";
const TodoList =()=>{

  const [todos,setTodos]= useState([]);
  const [message, setMessage]= useState("");
  const authContext = useAuth();
  const navigate = useNavigate()

  const username = authContext.username;

  useEffect(()=>{
    refreshTodos();
  },[])
  function refreshTodos(){
    retirieveTodos(username)
    .then((response)=>{
      console.log(response.data);
      setTodos(response.data);
    })
    .catch((error)=>console.log(error));
  }

  function updateTodo(id){
    // console.log("clicked"+id);
    navigate(`/todo/${id}`);
  }

  function deletTodo(id){
    deleteTodoApi(username, id).then(
      ()=>{
        setMessage(`Delete of the message with id ${id} is Successfull`)
        refreshTodos();
      }
    );
  }
  

    // const todos = [
    //   {
    //     id: 1,
    //     description: "Learn React",
    //     isDone: false,
    //     // TargetDate: new Date(),
    //   },
    //   {
    //     id: 2,
    //     description: "Learn Full stack development",
    //     isDone: false,
    //     // TargetDate: new Date(),
    //   },
    //   {
    //     id: 3,
    //     description: "Learn Spring boot",
    //     isDone: false,
    //     // TargetDate: new Date(),
    //   },
    // ];
    return (
      <>
        <div className="container mt-5 mb-5">
          <h2 className="mb-4">Your Todo List</h2>
          {message && <div className="alert alert-warning">{message}</div>}
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Description</th>
                <th>Status</th>
                {/* <th>Target Date</th> */}
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>
                    <span
                      className={`badge ${todo.isDone ? "bg-success" : "bg-warning"}`}
                    >
                      {todo.isDone ? "Done" : "Pending"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => deletTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>
                      Update
                    </button>
                  </td>
                  {/* <td>{todo.TargetDate}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default TodoList;