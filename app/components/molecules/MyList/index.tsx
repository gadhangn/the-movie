import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function MyList({ item, removeList }: { item: any; removeList: any }) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-[#1a1a1a] rounded-md mb-2 p-4">
      <div className="mb-4 sm:mb-0 sm:mr-4">
        <Image
          width={100}
          height={150}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item?.poster_path}`}
          alt="Movie Poster"
          className="w-20 h-24 object-cover rounded"
        />
      </div>
      <div className="flex-grow">
        <div className="text-lg font-semibold text-white">{item.title}</div>
        <div className="text-gray-100">{item.release_date}</div>
        <div className="mt-1 text-gray-200">{item.overview}</div>
      </div>
      <div className="flex justify-center sm:justify-end">
        <button
          onClick={removeList}
          className={`outline-none bg-teksActive text-[14px] rounded-md text-white cursor-pointer py-1 px-2 hover:bg-black transition-all ease-out hover:scale-[98%]`}
        >
          <FontAwesomeIcon icon={faMinus} color={'#ffff'} />
        </button>
      </div>
    </div>
  )
}