import { ITask } from "./types/tasks";

export const baseURL = `http://localhost:3001`
const headers = {
    "Content-type": "application/json"
}

export async function getTodos(): Promise<ITask[]> {
    const res = await fetch(`${baseURL}/tasks`, { cache: "no-store" })
    const todos = res.json()
    
    return todos
}

export async function getTodo(todo: ITask): Promise<ITask> {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, { cache: "no-store" })
    const todos = res.json()
    
    return todos
}

export async function newTodo(todo: ITask): Promise<ITask> {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json()

    return newTodo
}

export async function editTodo(todo: ITask): Promise<ITask> {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json()

    return updatedTodo
}

export async function deleteTodo(todo: ITask): Promise<void> {
    await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'DELETE'
    })
}