'use client'

import React from "react"
import Link from "next/link"
import { CardProps } from "@/types/props"
import { deleteTodo } from "@/api"

export default function Card({task, onChange}: CardProps) {
    const handleDelete = async () => {
        await deleteTodo(task)

        onChange && onChange(task.id!)
    }

    // bg-green-200
    // bg-blue-200
    // bg-red-200

    return (
        <div className={`bg-${task.tag}-200 p-4 sm:m-2 my-2 rounded-md shadow-md sm:max-w-xs w-full`}>
            <h2 className={`text-lg uppercase text-${task.tag}-900 font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis`}>{task.title}</h2>
            
            <div className="w-full h-40 resize-none rounded-md p-2 mb-2 overflow-hidden whitespace-wrap overflow-ellipsis">{task.description}</div>
            <div className="flex justify-between">
                <button onClick={() => handleDelete()} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Apagar</button>
                <Link href={{
                    pathname: '/addTask',
                    query: {
                        id: task.id, 
                        title: task.title, 
                        description: task.description,
                        tag: task.tag
                    }
                }}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Editar</button>
                </Link>
            </div>
        </div>
    )
}