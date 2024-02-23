import React from 'react'
import { Star } from './icons/Star'
import { Right } from './icons/Right'
export const Products = (props: { name: string }) => {

    return (
        <div className='flex justify-center items-center'>
            <div className='w-[88%] max-w-[1440px] flex justify-between px-6 py-2 flex-col'>
                <div className='flex justify-between w-full py-4'>
                    <div className='flex justify-center items-center'>
                        <Star />
                        <h1 className='font-semibold text-[22px]'>{props.name}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-[5px] h-[30px]'>
                        <h2 className='text-green font-normal text-sm'>Бүгдийг харах</h2>
                        <Right />
                    </div>
                </div>
                {/* //maplanaa */}
                <div className='flex justify-between pb-20'>
                    <div>
                        <img src="./egg.png" alt="" />
                        <h1 className='font-semibold text-lg'>Өглөөний хоол</h1>
                        <div>
                            <h2 className='font-semibold text-lg text-green'>14,800₮</h2>
                            <h2 className={`font-semibold text-lg text-black`}></h2>
                        </div>
                    </div>
                    <div>
                        <img src="./egg.png" alt="" />
                        <h1 className='font-semibold text-lg'>Өглөөний хоол</h1>
                        <div>
                            <h2 className='font-semibold text-lg text-green'>14,800₮</h2>
                            <h2 className={`font-semibold text-lg text-black`}></h2>
                        </div>
                    </div>
                    <div>
                        <img src="./egg.png" alt="" />
                        <h1 className='font-semibold text-lg'>Өглөөний хоол</h1>
                        <div>
                            <h2 className='font-semibold text-lg text-green'>14,800₮</h2>
                            <h2 className={`font-semibold text-lg text-black`}></h2>
                        </div>
                    </div>
                    <div>
                        <img src="./egg.png" alt="" />
                        <h1 className='font-semibold text-lg'>Өглөөний хоол</h1>
                        <div>
                            <h2 className='font-semibold text-lg text-green'>14,800₮</h2>
                            <h2 className={`font-semibold text-lg text-black`}></h2>
                        </div>
                    </div>
                </div>
                {/* //mapduusnaa */}
            </div>
        </div>
    )
}
