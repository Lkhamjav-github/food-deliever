import React from 'react'

export const Homefood = () => {
    return (
        <div className='suuder flex justify-center items-center bg-[#18BA51]  py-[170px] bg-[url(/suuder.png)] ' >
            {/* <img src="./suuder.png" alt="" /> */}
            <div className='w-[88%] max-w-[1200px]  flex justify-between  gap-10 px-6'>
                <div className='w-[384px] flex flex-col justify-center'>
                    <h1 className='text-white drop-shadow-inner  pb-[23px] shadow-black font-semibold text-[55px] leading-[49.5px]'>Pinecone <br></br>
                        Food delivery
                    </h1>
                    <hr className='border-t-2  pb-[23px]' />
                    <p className='text-white font-bold text-[22px] font-comportaa'>Horem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.</p>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div className=''>
                        <img className='absolute' src="./tsuiwan.png" alt="" />
                        <img className='relative pt-[113px] pl-[275px]' src="./budaa.png" alt="" />
                    </div>
                </div>

            </div>
        </div >
    )
}
