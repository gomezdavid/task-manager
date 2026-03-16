import { useState } from 'react'
import styles from '../styles/TaskForm.module.css'

export default function TaskForm({ onCreate }) {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('media')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        onCreate({ title, priority })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Nueva tarea..."
            />
            <select
                className={styles.select}
                value={priority}
                onChange={e => setPriority(e.target.value)}
            >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
            <button type="submit" className={styles.button}>+ Agregar</button>
        </form>
    )
}