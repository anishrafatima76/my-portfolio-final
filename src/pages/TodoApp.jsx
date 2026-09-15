import { useState } from "react";

export default function TodoApp() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        if (task.trim() === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setTask("");
    };


    const toggleTodo = (id) => {

        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );

    };


    const deleteTodo = (id) => {

        setTodos(
            todos.filter((todo) => todo.id !== id)
        );

    };


    return (
        <div className="todo-page">

            <section className="todo-container">

                <div className="todo-header">

                    <p className="todo-label">
                        STAY ORGANIZED
                    </p>

                    <h1>
                        My <span>Tasks.</span>
                    </h1>

                    <p className="todo-subtitle">
                        Keep your day simple, focused and organized.
                    </p>

                </div>


                <div className="todo-input-area">

                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addTodo();
                            }
                        }}
                    />

                    <button onClick={addTodo}>
                        Add Task
                    </button>

                </div>


                <div className="todo-list">

                    {todos.length === 0 ? (

                        <div className="empty-todo">
                            <div className="empty-icon">
                                ✓
                            </div>

                            <h3>
                                No tasks yet
                            </h3>

                            <p>
                                Add your first task and get started.
                            </p>
                        </div>

                    ) : (

                        todos.map((todo) => (

                            <div
                                className={`todo-item ${
                                    todo.completed ? "completed" : ""
                                }`}
                                key={todo.id}
                            >

                                <button
                                    className="check-btn"
                                    onClick={() => toggleTodo(todo.id)}
                                >
                                    {todo.completed ? "✓" : ""}
                                </button>


                                <span className="todo-text">
                                    {todo.text}
                                </span>


                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    ×
                                </button>

                            </div>

                        ))

                    )}

                </div>


                <div className="todo-footer">

                    <span>
                        {todos.filter((todo) => !todo.completed).length} tasks remaining
                    </span>

                    <span>
                        {todos.filter((todo) => todo.completed).length} completed
                    </span>

                </div>

            </section>

        </div>
    );
}