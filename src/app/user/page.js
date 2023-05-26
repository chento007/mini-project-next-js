import React from 'react'
import { API_USER } from '@/lib/api'
import CardUser from '@/components/CardUser';
export async function getUsers() {
    const res = await fetch(API_USER(8), { cache: "no-store" })
    const data = res.json();
    return data;
}

export async function generateMetadata() {
    return {
        title: "User Page",
        description: "This page show all user that has been post",
        metadataBase: new URL("https://louk-louk.vercel.app"),
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "/en-US",
                "de-DE": "/de-DE",
            },
        },
        openGraph: {
            title: "Home",
            images: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
        }
    }
}
export default async function page() {
    const users = await getUsers();
    return (
        <div className='p-2 lg:pl-16 lg:pr-16 lg:pt-10 md:pr-16 md:pt-10 md:pl-16 sm:pl-32 sm:pr-16 sm:pt-10'>
            <h3 className="text-2xl ml-24 mb-3 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
                Category
            </h3>
            <section className='grid grid-cols-2 sm:grid-cols-4 p-2  lg:pl-16 lg:pr-16 lg:pt-10 md:pr-16 md:pt-10 md:pl-16 sm:pl-32 sm:pr-16 sm:pt-10'>
                {
                    users.map((item, index) => (
                        <CardUser
                            id={item.id}
                            name={item.name}
                            image={item.avatar}
                            email={item.email}
                            role={item.role}
                            key={index}
                        />
                    ))
                }
            </section>
        </div>
    )
}
