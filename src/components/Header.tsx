import React from 'react'
import { Pinecone } from './icons/Pinecone'
import { Bag } from './icons/Bag'
import { Human } from './icons/Human'
import { Search } from './icons/Search'

export const Header = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[88%] max-w-[1440px] flex justify-between px-6 py-2'>
        <div className='flex justify-center items-center gap-6'>
          <Pinecone />
          <a className='text-sm font-bold hover:text-[#18BA51]' href="">Нүүр</a>
          <a className='text-sm font-bold hover:text-[#18BA51]' href="">Хоолны цэс</a>
          <a className='text-sm font-bold hover:text-[#18BA51]' href="">Хүргэлтын бүс</a>
        </div>

        <div className='flex justify-center items-center gap-6'>
          <label className="flex items-center gap-2 rounded-lg border-[1px] px-4 py-2 border-[black] hover:border-[#18BA51] ">
            <Search />
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <a href="" className='flex justify-center items-center gap-2 text-sm font-bold hover:text-[#18BA51]' ><Bag />Сагс</a>
          <a href="" className='flex justify-center items-center gap-2 text-sm font-bold hover:text-[#18BA51]'>< Human /> Нэвтрэх</a>
        </div>
      </div>
    </div>
  )
}
