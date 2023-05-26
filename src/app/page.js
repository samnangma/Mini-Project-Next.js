import Image from "next/image";
import ProductCard from "@/components/card";
import User from "@/components/user";
import Category from "@/components/category";
export async function getProduct() {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?limit=20&offset=1`,
    {cache:'no-store'}
  );
  return res.json();
}
export async function getUser() {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/users?limit=8`
  );
  return res.json();
}
export async function getCategory() {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories?limit=10`
  );
  return res.json();
}
export default async function Home() {
  const products = await getProduct();
  const users = await getUser();
  const categories = await getCategory();
  console.log(products);

  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        <div className="flex gap-3 w-full  justify-center col-span-4 min-h-min  flex-wrap ps-10 p-2">
          {products.map((product, index) => (
            <ProductCard
            id={product.id}
              key={index}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              description={product.description}
            />
          ))}
      
        </div>
      </main>
      <main className="grid grid-cols-4 gap-4">
        <h2 className="before:top-10 before:ms-7 before:w-20 before:h-1 text-center relative font-bold text-3xl my-5 before:absolute before:bg-gray-600">Category</h2>
           <div className=" flex gap-3 w-full h-auto justify-center col-span-4 min-h-min  flex-wrap ps-10 p-2 ">
             {
              categories.map((category,index)=>(
                <Category key={index} 
                image={category.image} 
                category={category.name}/>
              ))
             }
            </div> 
        </main>
      <main className="grid grid-cols-1 gap-4">
      <h2 className="before:top-10 before:ms-7 before:w-20 before:h-1 text-center relative font-bold text-3xl my-5 before:absolute before:bg-gray-600 ">Our Users</h2>
        <div className="justify-around  flex-wrap ps-10 p-2 flex gap-5 col-span-2 min-h-min ">
          {users.map((user, index) => (
            <User
              key={index}
              image={user.avatar}
              name={user.name}
              email={user.email}
            />
          ))}
        </div>
      </main>
    </>
  );
}

