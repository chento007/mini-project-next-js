import CardCategory from '@/components/CardCategory';
import React from 'react'
import { API_GET_ALL_CATEGORY } from '@/lib/api';
export async function getCategories() {
  const res = await fetch(API_GET_ALL_CATEGORY, { cache: "no-store" });
  const data = await res.json();
  return data;
}
export async function generateMetadata() {
  return {
    title: "category",
    description: "There are show all category",
    metadataBase: new URL("https://louk-louk.vercel.app"),
    ISO: 200,
    Keywords: "Clothes,Shop,online Shop,discount,",
    openGraph: {
      images: "https://istad.co/resources/img/logo_md.png",
    }
  }
}
export default async function page() {
  const categories = await getCategories();
  return (
    <section className='p-2 lg:pl-16 lg:pr-16 lg:pt-10 md:pr-16 md:pt-10 md:pl-16 sm:pl-32 sm:pr-16 sm:pt-10'>
      <h3 className="text-2xl ml-16 mb-3 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
        Category
      </h3>
      <div className='grid grid-cols-2 sm:grid-cols-4 p-2 gap-3  lg:pl-16 lg:pr-16 lg:pt-10 md:pr-16 md:pt-10 md:pl-16 sm:pl-32 sm:pr-16 sm:pt-10'>
        {
          categories.map((item, index) => (
            <CardCategory
              id={item.id}
              image={item.image}
              title={item.name}
              key={index}
            />
          ))
        }
      </div>
    </section>
  )
}
