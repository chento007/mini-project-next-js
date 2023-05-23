"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function FooterComponents() {
    const pathname = usePathname()
    if(pathname.includes("add")) return null;
    return (
        <footer className="bg-white rounded-lg shadow m-4 border-gray-200 dark:bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
