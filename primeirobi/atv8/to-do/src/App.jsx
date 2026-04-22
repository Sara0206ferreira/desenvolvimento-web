import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h2>Lista de Tarefas</h2>

      <form onSubmit={addTask} className="input-group">
        <input 
          type="text" 
          placeholder="Nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn">Adicionar</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className="task-text">{task.text}</span>
            <button onClick={() => removeTask(task.id)} className="delete-btn">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;