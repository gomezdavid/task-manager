import styles from '../styles/TaskFilters.module.css'

export default function TaskFilters({ current, onChange, tasks }) {

    const total = tasks.length
    const pendientes = tasks.filter(task => !task.isCompleted).length
    const completadas = tasks.filter(task => task.isCompleted).length

    return (
        <div className={styles.wrapper}>
            <button
                className={`${styles.button} ${current === 'todas' ? styles.active : ''}`}
                onClick={() => onChange('todas')}
            >
                Todas ({total})
            </button>
            <button
                className={`${styles.button} ${current === 'pendientes' ? styles.active : ''}`}
                onClick={() => onChange('pendientes')}
            >
                Pendientes ({pendientes})
            </button>
            <button
                className={`${styles.button} ${current === 'completadas' ? styles.active : ''}`}
                onClick={() => onChange('completadas')}
            >
                Completadas ({completadas})
            </button>
        </div>
    )
}