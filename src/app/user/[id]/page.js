import React from 'react'
import { API_GET_USER_BY_ID } from '@/lib/api'
import CardViewUserDetail from '@/components/CardViewUserDetail';
export async function getUsers(id) {
    const res = await fetch(API_GET_USER_BY_ID(id), { cache: "no-store" })
    const data = await res.json();
    return data;
}
export async function generateMetadata({ params }) {
    const { id } = params;
    const user = await getUsers(id);
    return {
        title: user.name,
        description: "this page show about view user detail " + user.role,
        ISO: 200,
        Keywords: `${user.role},${user.name}`,
        metadataBase: new URL("https://louk-louk.vercel.app"),
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "/en-US",
                "de-DE": "/de-DE",
            },
        },
        openGraph: {
            title:user.name,
            description: "this page show about view user detail " + user.role,
            images: user.avatar,
        }
    }
}
export default async function page({ params }) {
    const { id } = params;
    const user = await getUsers(id);
    return (
        <section>
            {
                <CardViewUserDetail
                    name={user.name}
                    email={user.email}
                    role={user.role}
                    
                    id={user.id}
                    key={1}
                    avatar={user.avatar}
                />
            }
        </section>
    )
}
