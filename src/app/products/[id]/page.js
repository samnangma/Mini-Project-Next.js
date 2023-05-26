import ProductDetail from "@/components/productDetail";
import React from "react";
export async function getProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)
  return {
    title: product.title,
    description: product.description,
    thumbnail: product.image,
    metadataBase: new URL('https://istad.co'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
      image: product.image,
      title: product.title,
      description: product.description
    },
  }
}

export default async function page({ params }) {
  const product = await getProduct(params.id);
  return (
    <main className="my-10 flex justify-center">
      {
        <ProductDetail
          image={product.images}
          description={product.description}
          title={product.title}
        />
        // <a href="#" class="flex flex-col lg:h-72 lg:w-4/6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //   <img class="object-cover w-full lg:h-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.images} alt="" />
        //   <div class="flex flex-col justify-between p-4 leading-normal">
        //     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        //   </div>
        // </a>
      }
    </main>
  );
}

// export default async function ProductDetail({params}) {
//     const{id} = params
//     const product = await fetchProducts(id)
//   return (
//     <div>
//     <h1>Product Detail: {product.title}</h1>
//     <img src={product.image} alt={product.title}/>
//     </div>
//   )
// }