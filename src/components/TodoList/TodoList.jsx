const TodoList =()=>{

    const todos = [
      {
        id: 1,
        description: "Learn React",
        isDone: false,
        // TargetDate: new Date(),
      },
      {
        id: 2,
        description: "Learn Full stack development",
        isDone: false,
        // TargetDate: new Date(),
      },
      {
        id: 3,
        description: "Learn Spring boot",
        isDone: false,
        // TargetDate: new Date(),
      },
    ];
    return (
      <>
        <div className="container mt-5 mb-5">
          <h2 className="mb-4">Your Todo List</h2>
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Status</th>
                {/* <th>Target Date</th> */}
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>
                    <span className={`badge ${todo.isDone ? 'bg-success' : 'bg-warning'}`}>
                      {todo.isDone ? 'Done' : 'Pending'}
                    </span>
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