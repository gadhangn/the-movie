'use client'
import { removeFromWatchList, setDataWatchList } from '@/store/actions/actionWatchList'
import { faCheck, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Movie({ item }: { item: any }) {
  const dispatch = useDispatch()
  const dataWatchList = useSelector((state: any) => state.dataWatchList)

  const isMovieInList = dataWatchList.some((movie: any) => movie.id === item.id)

  const [isHoveringTrailer, setIsHoveringTrailer] = useState(false)
  const [isHoveringPlus, setIsHoveringPlus] = useState(false)

  const handleWatchList = (item: any) => {
    if (!isMovieInList) {
      dispatch(setDataWatchList([item]))
    } else {
      dispatch(removeFromWatchList(item.id))
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden bg-[#58585A] shadow-lg flex flex-col">
      <div className="flex-grow">
        <div className="relative">
          <Image
            width={200}
            height={200}
            className="w-full"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item?.poster_path}`}
            alt="Movie Poster"
          />

          <div className="absolute top-2 right-2">
            <button
              onMouseEnter={() => setIsHoveringPlus(true)}
              onMouseLeave={() => setIsHoveringPlus(false)}
              onClick={() => handleWatchList(item)}
              className={`outline-none bg-[#5e5eef] text-[14px] rounded-md text-white cursor-pointer py-1 px-2 hover:bg-black transition-all ease-out hover:scale-[98%]`}
            >
              <FontAwesomeIcon icon={isMovieInList ? faCheck : faPlus} color={isHoveringPlus ? '#ffff' : '#0A0A0A'} />
            </button>
          </div>
        </div>

        <div className="px-2 py-4">
          <div className="font-bold text-lg mb-2 text-white">{item?.original_title}</div>
          <div className="text-white text-sm mb-2">{item?.release_date}</div>
          <div className="text-white text-sm mb-2">{item?.overview}</div>
        </div>
      </div>

      <div className="px-1 py-4 flex justify-between">
        <button
          onMouseEnter={() => setIsHoveringTrailer(true)}
          onMouseLeave={() => setIsHoveringTrailer(false)}
          className={`flex items-center outline-none text-[14px] rounded-md text-white cursor-pointer py-1 px-2 hover:text-black hover:bg-[#5e5eef] transition-all ease-out`}
        >
          <FontAwesomeIcon icon={faPlay} className="mr-2" color={isHoveringTrailer ? '#0A0A0A' : '#ffff'} />
          Trailer
        </button>
        <button
          onClick={() => handleWatchList(item)}
          className={`flex items-center outline-none bg-[#5e5eef] text-[14px] rounded-md text-black cursor-pointer py-1 px-2 hover:bg-white transition-all ease-out`}
        >
          <FontAwesomeIcon icon={isMovieInList ? faCheck : faPlus} className="mr-2" />
          WatchList
        </button>
      </div>
    </div>
  )
}
