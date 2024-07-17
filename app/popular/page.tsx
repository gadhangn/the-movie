'use client'

import React, { useEffect, useState } from 'react'
import Movie from '../components/molecules/movie'
import { getPopular } from '@/service/apipopular'

function Home() {
  const [movies, setMovies] = useState<any[]>([])

  const getData = () => {
    const params = {
      page: '1',
    }
    getPopular(params).then((res: any) => {
      if (res.status === 'success') {
        setMovies(res.data.results)
      } else {
        setMovies([])
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="px-4 flex flex-col h-screen overflow-scroll bg-black relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-36">
        {movies?.map((item, idx) => (
          <Movie key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Home
