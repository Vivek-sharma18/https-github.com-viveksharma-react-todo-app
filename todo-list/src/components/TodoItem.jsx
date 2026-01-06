function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>✖</button>
    </li>
  );
}

export default TodoItem;
