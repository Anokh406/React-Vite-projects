import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  // Handle adding a new to-do
  const addTodo = () => {
    if (todo && date) {
      setTodos([...todos, { text: todo, date: date }]);
      setTodo("");
      setDate("");
    }
  };

  // Handle deleting a to-do
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo App</h1>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Todo here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button variant="success" onClick={addTodo}>
          Add
        </Button>
      </InputGroup>

      <div className="todo-list">
        {todos.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <span>{item.text}</span>
            <span>{item.date}</span>
            <Button variant="danger" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
