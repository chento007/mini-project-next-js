import React from 'react'
import Link from 'next/link'
import { URL_IMAG } from '@/lib/api'
import Image from 'next/image';
export default function AvatarComponents({ id, image, title }) {
    return (
        <Link
            href={`/category/${id}`}
            className='flex flex-col text-center justify-center items-start pb-10 w-40'>
            <Image
                src={image}
                width={500}
                height={500}
                style={{
                    width: "60%",
                    height: "95px",
                    borderRadius: "50%"
                }}
                alt="Picture of the author"
            />
            <p className='block mt-1 w-24  text-gray-900 dark:text-white line-clamp-1text-1xl text-center py-2 pl-3 pr-4 rounded '>
                {title}
            </p>
        </Link>
    )
}
