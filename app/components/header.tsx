'use client'

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState<number | null>(null)

  const handleLinkClick = (index: number) => {
    setActiveLink(index)
  };

  useEffect(() => {
    
    pathname === '/addTask' ? handleLinkClick(1) : handleLinkClick(0)
  }, [pathname])

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={"/" }className="-m-1.5 p-1.5">
            <span className="sr-only">To-do App</span>
            <img className="h-8 w-auto" src="https://harpio.com.br/wp-content/uploads/2023/02/cropped-favicon_harpio_64x64px-300x300-1-150x150.png" alt="" />
          </Link>
        </div>

        <div className="flex lg:flex-1 justify-around">
            <Link 
            onClick={() => handleLinkClick(0)}
            className={`text-sm leading-6 text-gray-900 hover:bg-gray-200 font-bold py-2 px-4 rounded ${activeLink === 0 ? 'bg-gray-200': ''}`}
            href={'/'}>Tarefas</Link>

            <Link 
            onClick={() => handleLinkClick(1)}
            className={`text-sm leading-6 text-gray-900 hover:bg-gray-200 font-bold py-2 px-4 rounded ${activeLink === 1 ? 'bg-gray-200': ''}`} 
            href={'/addTask'}>Adicionar Tarefa</Link>
        </div>
      </nav>
    </header>
  )
}
