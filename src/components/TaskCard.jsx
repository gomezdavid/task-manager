import React from 'react'
import styles from '../styles/TaskCard.module.css'

export default function TaskCard({ task, onToggle, onDelete }) {

    return (
        <div className={`${styles.card} ${task.isCompleted ? styles.done : ''}`}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={task.isCompleted}
                onChange={() => onToggle(task.id)}
            />
            <span className={`${styles.title} ${task.isCompleted ? styles.titleDone : ''}`}>
                {task.title}
            </span>
            <span className={`${styles.badge} ${styles[task.priority]}`}>
                {task.priority}
            </span>
            <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>×</button>
        </div>
    )
}
