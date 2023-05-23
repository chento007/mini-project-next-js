import React from 'react'
import Image from 'next/image'
export default function CardProductDetail({ id, title, descrption, thumbnail, creationAt, updateAt }) {
    return (
        <div className='w-10/12 m-auto h-screen p-2'>
            <div className=' flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Image
                    className="object-cover rounded-t-lg w-1/2 h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
                    src={thumbnail}
                    alt=""
                    width={200}
                    height={100}
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
                    <article className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {title}</article>
                    <article className="mb-3 font-normal text-gray-700 dark:text-gray-400">Desciption : {descrption}</article>
                    <p className="font-normal text-gray-700 dark:text-gray-400">create At : {creationAt}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Update At : {creationAt}</p>
                </div>
            </div>
        </div>
    )
}
