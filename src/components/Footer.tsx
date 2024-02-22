import React from 'react'
import { Pineconewhite } from './icons/Pineconewhite'
import { Fb } from './icons/Fb'
import { Twit } from './icons/Twit'
import { Ig } from './icons/ig'

import { Bgfooter } from './icons/Bgfooter'
export const Footer = () => {
    return (

        <div className='suuder flex justify-center items-center bg-[#18BA51] ' >
            {/* <img src="./suuder.png" alt="" /> */}
            <div className='w-[88%] flex justify-between flex-col' >
                <div className='flex justify-center items-center gap-2 font-bold text-white text-xl'>
                    <Pineconewhite />
                    Food Delivery
                </div>
                <div>
                    <a href="">Нүүр</a>
                    <a href="">Холбоо барих</a>
                    <a href="">Хоолны цэс</a>
                    <a href="">Үйлчилгээний нөхцөл</a>
                    <a href="">Хүргэлтийн бүс</a>
                    <a href="">Нууцлалын бодлого</a>
                </div>
                <div className='flex gap-[18px] justify-center items-center'>
                    <Fb />
                    <Ig />
                    <Twit />
                </div>
                <hr />
                <h1>© 2024 Pinecone Foods LLC <br /> Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
            </div >
        </div >
    )
}
