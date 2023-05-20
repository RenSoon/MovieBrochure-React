import { React } from "react";
import ReactDOM from "react-dom/client";

// import { CounterApp } from "./counterApp";
import { ToDoListApp } from "./toDoListApp";

function App() {
  return (
    <div>
      <ToDoListApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
