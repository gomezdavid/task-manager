import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './api/taskApi'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import styles from './styles/App.module.css'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('todas')

  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])

  const handleCreate = async (taskData) => {
    const newTask = await createTask(taskData)
    setTasks(prev => [newTask, ...prev])
  }

  const handleToggle = async (id) => {
    const task = tasks.find(t => t.id === id)
    await updateTask(id, { ...task, isCompleted: !task.isCompleted })
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    ))
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pendientes') return !task.isCompleted
    if (filter === 'completadas') return task.isCompleted
    return true
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Mis tareas</h1>
        <p>Gestor conectado a .NET API</p>
      </div>
      <TaskForm onCreate={handleCreate} />
      <TaskFilters current={filter} onChange={setFilter} tasks={tasks} />
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}