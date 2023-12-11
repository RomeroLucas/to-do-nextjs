'use client'

import React, {useState} from "react"
import Card from "../components/card"
import { TasksProps } from "@/types/props"

export default function Tasks({tasks} : TasksProps) {
    const [taskList, setTaskList] = useState(tasks)

    const spliceCard = (id: string) => {
        const index = taskList.findIndex((task) => task.id === id)
        const next = taskList.slice(0, index).concat(taskList.slice(index + 1))

        setTaskList(next)
    }

    return (
        <>
            {!!taskList?.length && <div className="mx-auto w-full flex flex-wrap items-center sm:items-start rounded">
                {taskList.map(item => <Card onChange={spliceCard} key={item.id} task={item} />)}
            </div>}
        </>
    )
}