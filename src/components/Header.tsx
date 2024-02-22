import React from 'react'
import { Pinecone } from './icons/Pinecone'
export const Header = () => {
    return (
        <div>
            <div>
                <Pinecone />
                <a href="">Нүүр</a>
                <a href="">Хоолны цэс</a>
                <a href="">Хүргэлтын бүс</a>
            </div>
            <div>
                <input type="search" placeholder='Хайх' />
                <a href="">Сагс</a>
                <a href="">Нэвтрэх</a>
            </div>
        </div>
    )
}
