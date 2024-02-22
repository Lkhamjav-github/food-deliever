import React from 'react'
import { Pinecone } from './icons/Pinecone'
import { Bag } from './icons/Bag'
import { Human } from './icons/Human'
import { Search } from './icons/Search'

export const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[88%] flex justify-between px-6 py-2'>
                <div className='flex justify-center items-center gap-6'>
                    <Pinecone />
                    <a className='text-sm font-bold' href="">Нүүр</a>
                    <a className='text-sm font-bold' href="">Хоолны цэс</a>
                    <a className='text-sm font-bold' href="">Хүргэлтын бүс</a>
                </div>

                <div className='flex justify-center items-center gap-6'>
                    <label className="flex items-center gap-2 rounded-lg border-[1px] px-4 py-2 border-[black] ">
                        <Search />
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <a href="" className='flex justify-center items-center gap-2 text-sm font-bold' ><Bag />Сагс</a>
                    <a href="" className='flex justify-center items-center gap-2 text-sm font-bold'>< Human /> Нэвтрэх</a>
                </div>
            </div>
        </div>
    )
}
