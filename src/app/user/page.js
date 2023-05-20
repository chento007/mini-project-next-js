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
    }
  }
export default async function page() {
    const users = await getUsers();
    return (
        <section className='grid grid-cols-2 sm:grid-cols-4 p-2 sm:pl-44 sm:pr-44 sm:pt-10'>
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
    )
}
