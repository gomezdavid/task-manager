import { useState } from 'react'
import TaskCard from './components/TaskCard'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import styles from './styles/App.module.css'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Comprar leche", priority: "alta", isCompleted: false },
    { id: 2, title: "Crear proyecto .NET", priority: "alta", isCompleted: false },
    { id: 3, title: "Diseñar base de datos", priority: "media", isCompleted: false },
  ])

  const [filter, setFilter] = useState('todas')

  const handleToggle = (id) => {
    const tareasActualizadas = tasks.map(function (task) {
      if (task.id === id) {
        const tareaActualizada = {
          id: task.id,
          title: task.title,
          priority: task.priority,
          isCompleted: !task.isCompleted
        }
        return tareaActualizada
      } else {
        return task
      }
    })

    setTasks(tareasActualizadas)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleCreate = (taskData) => {
    const nuevaTarea = {
      id: tasks.length + 1,
      title: taskData.title,
      priority: taskData.priority,
      isCompleted: false
    }

    setTasks([nuevaTarea, ...tasks])
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