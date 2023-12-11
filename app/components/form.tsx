'use client'

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FormProps } from "@/types/props"
import { ITask } from "@/types/tasks"
import { editTodo, newTodo, deleteTodo, getTodo } from "@/api"

export default function Form({method, task}: FormProps) {
    const { push } = useRouter()
    const [formData, setFormData] = useState<ITask>(task!)

    useEffect(() => {
      const fetchData = async () => {
        const resp: ITask = await getTodo(task!)

        setFormData(resp)
      }

      if(method === "PUT") {

        fetchData()  
      } else {

        setFormData({title: '', description: '', tag: 'green'})
      }
    }, [])

    const handleChange = (name: string, value: string) => {

      setFormData({...formData, [name]: value})
    }

    const handleSubmit = async () => {

      if(method === "POST") {
        await newTodo(formData)
        
        setFormData({id: '', title: '', description: '', tag: ''})
      } else {

          await editTodo({
              id: task?.id!,
              title: formData.title,
              description: formData.description,
              tag: formData.tag
          })
      }

      push('/')
    }

    const handleDelete = async () => {

      await deleteTodo(task!)

      push('/')
    }

    const isDisable = () => {
      return !formData?.title || !formData?.description
    } 

  return (
    <form className="bg-white p-4 m-2 rounded-md shadow-md max-w-xl w-full ">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Nova Tarefa</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Toda tarefa criada pode ser visualizada na aba Tarefas.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Titulo
              </label>
              <div className="mt-2">
                <div className="flex rounded-md border-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    onChange={({target: {value}}) => handleChange('title', value)}
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    maxLength={30}
                    required={true}
                    className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded"
                    placeholder=""
                    value={task && formData.title}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Descrição
              </label>
              <div className="mt-2">
                <textarea
                  onChange={({target: {value}}) => handleChange('description', value)}
                  id="description"
                  name="description"
                  rows={3}
                  maxLength={180}
                  required={true}
                  className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={task && formData.description}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Descreva mais detalhes da tarefa.</p>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                Tag
              </label>
              <div className="mt-2">
                <select
                  onChange={({target: {value}}) => handleChange('tag', value)}
                  id="tag"
                  name="tag"
                  autoComplete="tag-name"
                  required={true}
                  value={task && formData.tag}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >  
                  <option value={'green'}>Diária</option>
                  <option value={'red'}>Urgente</option>
                  <option value={'blue'}>Lembrete</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {method === 'PUT' && (
          <button
          onClick={(e) => {
            e.preventDefault()
            handleDelete()
          }}
          type="submit"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Apagar
        </button>
        )}

        <button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          type="submit"
          disabled={isDisable()}
          className={`rounded-md ${isDisable() ? ' bg-gray-400 cursor-not-allowed': ' bg-indigo-600 hover:bg-indigo-500'} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          {method === "POST" ? "Adicionar Tarefa" : "Atualizar Tarefa"}
        </button>
      </div>
    </form>
  )
}