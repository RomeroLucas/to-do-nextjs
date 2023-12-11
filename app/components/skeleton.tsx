
export function SkeletonCard() {
    return (
        <div className={`bg-gray-300 p-4 m-2 rounded-md shadow-md max-w-xs w-full animate-pulse`}>
            <h2 className={`text-lg text-transparent uppercase bg-gray-200 mb-2 rounded-md shadow-md max-w-xs w-full animate-pulse`}>&nbsp;</h2>
            
            <div className="text-transparent bg-gray-200 h-40 resize-none rounded-md p-2 mb-2 shadow-md max-w-xs w-full animate-pulse">&nbsp;</div>
            <div className="flex justify-between">
                <button className="bg-gray-200 text-transparent px-4 py-2 rounded-md">&nbsp;</button>
                <button className="bg-gray-200 text-transparent px-4 py-2 rounded-md">&nbsp;</button>
            </div>
        </div>
    )
}

export function SkeletonForm() {
    return (
        <form className="bg-gray-300 p-4 m-2 rounded-md shadow-md max-w-xl w-full animate-pulse">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base text-transparent bg-gray-200 leading-7 rounded animate-pulse">Nova Tarefa</h2>
                

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-transparent bg-gray-200 rounded animate-pulse">
                        Titulo
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            className="block text-sm font-medium leading-6 text-transparent bg-gray-200 rounded animate-pulse"
                        />
                        </div>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-transparent bg-gray-200 rounded animate-pulse">
                        Descrição
                    </label>
                    <div className="mt-2">
                        <textarea
                        className="block w-full rounded-md border-0 pl-1 py-1.5 shadow-sm  sm:text-sm sm:leading-6 bg-gray-200 animate-pulse"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="tag" className="block text-sm font-medium leading-6 text-transparent bg-gray-200 rounded animate-pulse">
                        Tag
                    </label>
                    <div className="mt-2">
                        <select
                        className="block text-sm font-medium leading-6 text-transparent bg-gray-200 rounded animate-pulse"
                        >
                        <option></option>  
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
                <button
                className=" px-3 py-2 text-sm text-transparent bg-gray-200 rounded animate-pulse"
                >
                &nbsp;
                </button>
                

                <button
                type="submit"
                className=" px-3 py-2 text-sm text-transparent bg-gray-200 rounded animate-pulse"
                >
                &nbsp;
                </button>
            </div>
        </form>
    )
}