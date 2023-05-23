"use client"
import React from 'react'
import Link from 'next/link'
import { URL_IMAG } from '@/lib/api'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function AvatarComponents({ id, image, title }) {
    const router=useRouter();
    return (
        <div onClick={()=>router.push(`/category/${id}`)}
            className='w flex flex-col text-center justify-start items-center  pb-6  '>
            <Image
                src={image}
                width={0}
                height={0}
                alt="Picture of the author"
                className='h-20 w-20 md:h-28 md:w-28 '
                style={{ objectFit: "contain", aspectRatio: "3/4", maxBlockSize: "colorBurn", borderRadius: "50%", border: "1px solid black" }}
            />
            <article className='block mt-1 w-24 truncate  text-gray-900 dark:text-white line-clamp-1 text-1xl text-center rounded '>
                {title}
            </article>
        </div>
    )
}
