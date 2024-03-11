import React, { useEffect, useState } from 'react'

export const Forgotten = () => {
    const [email, setEmail] = useState('');
    const [toggle, setToggle] = useState('');
    console.log('hello :', email)
    useEffect(() => {
        if (email.length === 0) {
            setToggle('none')
        }
        if (email.length == 1) {
            setToggle('hide')
        }
    })
    const handleForgot = async () => {
        try {


        }
        catch (err) {
            alert("Email oldsongui")
        }
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[88%] max-w-[1200px] flex justify-center px-6 py-[110px] items-center'>
                <div className='flex gap-8 justify-center items-center flex-col'>
                    <h1 className='font-bold text-[28px]'>Нууц үг сэргээх</h1>
                    <div className='py-4'>
                        <h2 className='font-normal pb-1 text-sm'>Имэйл</h2>
                        <input className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' value={email} onChange={e => setEmail(e.target.value)} type="gmail" placeholder='Имэйл хаягаа оруулна уу' />
                    </div>
                    <button className={`w-[384px] bg-[${toggle == 'none' ? '#EEEFF2' : '#18BA51'}] text-[${email == 'none' ? '#1C20243D' : 'white'}]  py-[14.5px] rounded`}>
                        Үргэлжлүүлэх
                    </button>

                </div>
            </div>
        </div>
    )
}
