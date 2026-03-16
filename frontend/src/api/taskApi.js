const BASE_URL = 'https://localhost:7000/api'

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`)
  return response.json()
}

export const createTask = async (taskData) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData)
  })
  return response.json()
}

export const updateTask = async (id, changes) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...changes })
  })
  return response
}

export const deleteTask = async (id) => {
  console.log('eliminando tarea con id:', id)
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  })
  return response
}