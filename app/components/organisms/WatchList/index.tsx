'use client'

import MyList from '@components/molecules/MyList'
import { removeFromWatchList } from '@store/actions/actionWatchList'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function WatchList() {
  const dispatch = useDispatch()

  const dataWatchList = useSelector((state: any) => state.dataWatchList)

  const handleRemoveFromWatchList = (id: any) => {
    dispatch(removeFromWatchList(id))
  }

  return (
    <div className="px-4 flex flex-col h-screen bg-black overflow-scroll relative">
      <div className="mb-36">
        <div className="py-4 text-xl font-semibold text-white">Your Watch List</div>
        {dataWatchList.length === 0 && <div className="text-white">Your Watch List is empty</div>}
        {dataWatchList.map((item: any, index: any) => (
          <MyList key={index} item={item} removeList={() => handleRemoveFromWatchList(item.id)} />
        ))}
      </div>
    </div>
  )
}
