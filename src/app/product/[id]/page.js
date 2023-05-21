import CardProductDetail from '@/components/CardProductDetail';
import { API_PRODUCT_DETAIL } from '@/lib/api';
import React from 'react'
async function getProductDetail(id) {
  try {
    let res = await fetch(API_PRODUCT_DETAIL(id), { cache: "no-store" });
    const data = await res.json();
    console.log("error : " + JSON.stringify(data));
    return data;
  } catch (error) {
    alert("error category")
    console.log("error : " + error.message);
  }
}
export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await getProductDetail(id);
  return {
    title: product.title,
    description: product.description,
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
      images: product.images[0],
    }
  }
}
export default async function page({ params }) {
  const { id } = params;
  console.log("id: " + id)
  const product = await getProductDetail(id);
  return (
    <section>
      {
        product ? <>
          <CardProductDetail
            key={1}
            id={id}
            title={product.title}
            descrption={product.description}
            thumbnail={product.images[0]}
            creationAt={product.creationAt}
            updateAt={product.updateAt}
          />
        </> : <></>
      }
    </section>
  )
}
