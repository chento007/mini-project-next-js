import React from 'react'
import Image from 'next/image'
export default function CardViewUserDetail({ id, name, email, avatar, role }) {
    return (
        <div className='w-10/12 m-auto h-screen p-2'>
            <div className=' flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Image
                    className="object-cover rounded-t-lg w-1/2 h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
                    src={avatar}
                    alt=""
                    width={200}
                    height={100}
                />

                <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {name}</h5>
                    <article className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : {email}</article>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Role : {role}</p>
                </div>
            </div>
        </div>
    )
}
