import React from 'react'
import CardProduct from '@/components/CardProduct';
import { API_CATEGORY, API_GET_CATEGORY_BY_ID, API_PRODUCT_BY_CATEGORY } from '@/lib/api';
export async function getProductByCategory(category_id) {
    try {
        const res = await fetch(API_PRODUCT_BY_CATEGORY(category_id, 20, 0), { cache: "no-store" });
        const data = await res.json();
        return data ? data : [];
    } catch (error) {
        alert(error.message)
    }
}
export async function getCategoryById(id) {
    const res = await fetch(API_GET_CATEGORY_BY_ID(id), { cache: "no-store" });
    const data = await res.json();
    return data;
}
export async function generateMetadata({ params }) {
    const { id } = params;
    const categories = await getCategoryById(id);
    return {
        title: categories.name,
        description: "There are product that in category " + categories.name,
        metadataBase: new URL("https://louk-louk.vercel.app"),
        ISO: 200,
        Keywords: "Clothes,Shop,online Shop,discount,",
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "/en-US",
                "de-DE": "/de-DE",
            },

        },
        openGraph: {
            title: categories.name,
            description: "There are product that in category " + categories.name,
            images: categories.image,
        }
    }
}
export default async function page({ params }) {
    const { id } = params;
    const productsCategory = await getProductByCategory(id);
    return (
        <section>
            {(productsCategory.length != 0) ? (
                <div className='p-2 lg:pl-16 lg:pr-16 lg:pt-10 md:pr-16 md:pt-10 md:pl-16 sm:pl-32 sm:pr-16 sm:pt-10'>
                    <h3 className="text-2xl mb-3 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
                        {(productsCategory.length != 0) ? productsCategory[0].category["name"] : "No Record"}
                    </h3>
                    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
                        {
                            productsCategory.map((item, index) => (
                                <CardProduct
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    thumbnail={item.images[0]}
                                />
                            ))
                        }
                    </section>
                </div>
            ) : (
                <h3 className="text-2xl m-14 mb-2 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
                    No Record
                </h3>
            )}
        </section>
    )
} 
