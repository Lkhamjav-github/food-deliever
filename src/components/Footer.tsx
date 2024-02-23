import React from 'react'
import { Pineconewhite } from './icons/Pineconewhite'
import { Fb } from './icons/Fb'
import { Twit } from './icons/Twit'
import { Ig } from './icons/Ig'

import { Bgfooter } from './icons/Bgfooter'
export const Footer = () => {
    return (

        <div className='suuder flex justify-center items-center bg-[#18BA51]  py-[114px] bg-[url(/suuder.png)] ' >
            {/* <img src="./suuder.png" alt="" /> */}
            <div className='w-[88%] flex justify-between flex-col gap-10 px-6' >
                <div className='flex justify-center items-center gap-2 font-bold text-white text-xl'>
                    <Pineconewhite />
                    Food Delivery
                </div>
                <div className='flex text-white justify-between text-base'>
                    <a className='text-base font-semibold text-white  underline' href="">Нүүр</a>
                    <a className='text-base font-semibold text-white  underline' href="">Холбоо барих</a>
                    <a className='text-base font-semibold text-white  underline' href="">Хоолны цэс</a>
                    <a className='text-base font-semibold text-white  underline' href="">Үйлчилгээний нөхцөл</a>
                    <a className='text-base font-semibold text-white  underline' href="">Хүргэлтийн бүс</a>
                    <a className='text-base font-semibold text-white  underline' href="">Нууцлалын бодлого</a>
                </div>
                <div className='flex gap-[18px] justify-center items-center'>
                    <Fb />
                    <Ig />
                    <Twit />
                </div>
                <hr />
                <div>
                    <h1 className='text-white justify-center items-center flex'>© 2024 Pinecone Foods LLC</h1>
                    <h1 className='text-white justify-center items-center flex'>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
                </div>
            </div >
        </div >
    )
}
