"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function CardUser({ id, name, image, email, role }) {
    return (
        <div >
            <div className="w-5/6 m-5 mb-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>
                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <Image
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={image}
                        width={100}
                        height={100}
                        alt={name}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
                    <div className="m-5">
                        <Link href={"/user/" + id} className="m-1 w-full items-center p-1 sm:px-4  sm:py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
