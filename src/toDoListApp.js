import "bootstrap/dist/css/bootstrap.min.css";
import "./ToDoListApp.css";
import { useState } from "react";

export function ToDoListApp() {
  const [myList, setList] = useState([
    { task: "My first task", status: false },
  ]);
  const [todo, setToDo] = useState("");

  const TextInput = (event) => {
    setToDo(event.target.value);
  };

  const AddTask = () => {
    if (todo.length > 0) {
      setList([...myList, { task: todo, status: false }]);
      setToDo("");
      console.log(myList);
    }
  };

  const UpdateStatus = (index) => {
    setList(
      myList.map((item, itemIndex) => {
        if (index === itemIndex) {
          item.status = true;
        }
        return item;
      })
    );
  };

  const DeleteTask = (index) => {
    setList(myList.filter((item, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="row ParentRow">
      <div className="col InputFields">
        <h1 className="Header">Add task</h1>
        <textarea className="ToDoInput" onChange={TextInput} value={todo} />
        <div className="ButtonContainer">
          <button className="MyButton" onClick={AddTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="col List">
        <h1>List Field</h1>
        <table className="MyTable">
          <thead>
            <tr>
              <td className="ToDoCell">To Do</td>
              <td className="StatusCell">Status</td>
              <td className="StatusCell">Actions</td>
            </tr>
          </thead>
          <TableRow
            myList={myList}
            DeleteTask={DeleteTask}
            UpdateStatus={UpdateStatus}
          />
        </table>
      </div>
    </div>
  );
}

function TableRow(props) {
  return (
    <tbody>
      {props.myList.map((item, index) => {
        return (
          <tr
            key={index}
            style={{
              backgroundColor: item.status ? "#6dd962" : "#e4e3e3",
            }}
          >
            <td>{item.task}</td>
            <td>{item.status ? "Done" : "Not Done"}</td>
            <td>
              <button
                onClick={() => props.UpdateStatus(index)}
                style={{ display: item.status ? "none" : "" }}
              >
                Done
              </button>
              <button onClick={() => props.DeleteTask(index)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
