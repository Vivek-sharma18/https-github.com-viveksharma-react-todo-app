import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="input-section">
      <input
        value={text}
        placeholder="Add task..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default TodoInput;
