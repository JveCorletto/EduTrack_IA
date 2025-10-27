'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar({ initialSearch = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
    router.push(`/courses?${params.toString()}`)
  }

  const handleClear = () => {
    setSearchTerm('')
    router.push('/courses')
  }

  return (
    <div className="max-w-2xl mx-auto sm:mx-0">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Introduce el nopmbre del curso"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 mr-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <button
              type="submit"
              className="h-full px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-colors duration-200"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}