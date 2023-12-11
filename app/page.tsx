'use client'

import React, {useState, useEffect} from "react"
import Card from "./components/card"
import { getTodos } from "@/api"
import { ITask } from "@/types/tasks"

export default function Tasks() {
    const [taskList, setTaskList] = useState<ITask[]>([])

    useEffect(() => {
        (async () => {
            const tasks = await getTodos()
            setTaskList(tasks)
        })()
    }, [])

    const deleteTask = (id: string) => { 
        // pela automonia do projeto foi implementado o deletar via client side
        const index = taskList.findIndex((task) => task.id === id)
        const next = taskList.slice(0, index).concat(taskList.slice(index + 1))

        setTaskList(next)
    }

    return (
        <>
            {!!taskList?.length && <div className="mx-auto w-full flex flex-wrap items-start rounded">
                {taskList.map(item => <Card onChange={deleteTask} key={item.id} task={item} />)}
            </div>}
        </>
    )
}