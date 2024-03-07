import React from 'react'
import { Pen } from './icons/Pen'

export const User = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[88%] max-w-[1200px] flex justify-center px-6 py-[110px] items-center'>
                <div className='flex gap-8 justify-center items-center flex-col'>
                    <div>
                        <img className='w-[120px] h-[120px] absolute' src="./photo.png" alt="" />
                        <div className='mt-[91px] bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] relative ml-[90px]'>
                            <Pen />
                        </div>
                    </div>
                    <h1 className='font-bold text-[28px]'>УгтахБаяр</h1>
                    <div className='flex bg-[#F6F6F6] py-2 px-5 rounded w-[392px] gap-2 items-center '>
                        <div className='bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] '>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                        <div className='flex flex-col pr-[192px]'>
                            <p className='text-[#888A99] font-normal text-[12px]'>Your name</p>
                            <h2 className='font-normal text-[16px]'>УгтахБаяр</h2>
                        </div>
                        <Pen />
                    </div>
                    <div className='flex bg-[#F6F6F6] py-2 px-5 rounded w-[392px] gap-2 items-center '>
                        <div className='bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] '>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                        <div className='flex flex-col pr-[192px]'>
                            <p className='text-[#888A99] font-normal text-[12px]'>Your name</p>
                            <h2 className='font-normal text-[16px]'>УгтахБаяр</h2>
                        </div>
                        <Pen />
                    </div>
                    <div className='flex bg-[#F6F6F6] py-2 px-5 rounded w-[392px] gap-2 items-center '>
                        <div className='bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] '>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9L2 4V14H11V16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V9H18V4L10 9ZM10 7L18 2H2L10 7ZM17 19L15.6 17.6L17.175 16H13V14H17.175L15.575 12.4L17 11L21 15L17 19ZM2 4V15V9V9.075V2V4Z" fill="#1C1B1F" />
                            </svg>

                        </div>
                        <div className='flex flex-col pr-[192px]'>
                            <p className='text-[#888A99] font-normal text-[12px]'>Your name</p>
                            <h2 className='font-normal text-[16px]'>УгтахБаяр</h2>
                        </div>
                        <Pen />
                    </div>
                    <div className='flex items-center justify-start gap-2 w-[392px] py-2 px-5'>
                        <div className='bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] '>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 18C7.2 18 5.19583 17.2375 3.4875 15.7125C1.77917 14.1875 0.8 12.2833 0.55 10H2.6C2.83333 11.7333 3.60417 13.1667 4.9125 14.3C6.22083 15.4333 7.75 16 9.5 16C11.45 16 13.1042 15.3208 14.4625 13.9625C15.8208 12.6042 16.5 10.95 16.5 9C16.5 7.05 15.8208 5.39583 14.4625 4.0375C13.1042 2.67917 11.45 2 9.5 2C8.35 2 7.275 2.26667 6.275 2.8C5.275 3.33333 4.43333 4.06667 3.75 5H6.5V7H0.5V1H2.5V3.35C3.35 2.28333 4.3875 1.45833 5.6125 0.875C6.8375 0.291667 8.13333 0 9.5 0C10.75 0 11.9208 0.2375 13.0125 0.7125C14.1042 1.1875 15.0542 1.82917 15.8625 2.6375C16.6708 3.44583 17.3125 4.39583 17.7875 5.4875C18.2625 6.57917 18.5 7.75 18.5 9C18.5 10.25 18.2625 11.4208 17.7875 12.5125C17.3125 13.6042 16.6708 14.5542 15.8625 15.3625C15.0542 16.1708 14.1042 16.8125 13.0125 17.2875C11.9208 17.7625 10.75 18 9.5 18ZM12.3 13.2L8.5 9.4V4H10.5V8.6L13.7 11.8L12.3 13.2Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                        <h2>Захиалгын түүх</h2>
                    </div>

                    <div className='flex items-center justify-start gap-2 w-[392px] py-2 px-5'>
                        <div className='bg-white flex justify-center items-center rounded-full w-12 h-12 border-[1px] border-[#EEEFF2] '>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 18C1.95 18 1.47917 17.8042 1.0875 17.4125C0.695833 17.0208 0.5 16.55 0.5 16V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H9.5V2H2.5V16H9.5V18H2.5ZM13.5 14L12.125 12.55L14.675 10H6.5V8H14.675L12.125 5.45L13.5 4L18.5 9L13.5 14Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                        <h2>Захиалгын түүх</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}


