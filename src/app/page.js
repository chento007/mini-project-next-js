import AvatarComponents from '@/components/Avatar';
import CardProduct from '@/components/CardProduct'
import { API_PRODUCT, API_CATEGORY } from '@/lib/api';
export async function getProduct() {
  const res = await fetch(API_PRODUCT(20, 0), { cache: "no-store" });
  const respone = await res.json();
  return respone;
}
export const metadata = {
  title: 'Home',
  description: 'Alibaba Group Holding Limited, or Alibaba (Chinese: 阿里巴巴), is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology. Founded on 28 June 1999 in Hangzhou, Zhejiang, the company provides consumer-to-consumer (C2C), business-to-consumer',
};
export async function getCategory() {
  const res = await fetch(API_CATEGORY(8));
  const respone = await res.json();
  return respone;
}
export default async function Home() {
  const products = await getProduct();
  const categories = await getCategory();
  return (
    <>
      <section className='p-2 sm:pl-44 sm:pr-44 sm:pt-10'>
        <h3 className="text-2xl  mb-2 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
          Categories
        </h3>
        <section className='grid grid-cols-4 sm:grid-cols-3 md:grid-cols-8 gap-3'>
          {
            categories.map((category, index) => (
              <AvatarComponents
                key={index}
                id={category.id}
                image={category.image}
                title={category.name}
              />
            ))
          }
        </section>
        <h3 className="text-2xl mb-3 font-semibold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
          Products
        </h3>
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {
            products.map((item, index) => (
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
      </section>
    </>

  )
}
