import React from "react";
import Link from "next/link";

export default function ProductCard({ title, image, price, id, description }) {
  return (
    <main>
      <div class="mx-auto h-96 mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img
          class="h-48 w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {title}
          </h2>
          <p class="mb-2 line-clamp-2 text-base dark:text-gray-300 text-gray-700">
            {description}
          </p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              ${price}
            </p>
            <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
              ${price + 30}
            </p>
            <Link
              href={`/products/${id}`}
              class=" ml-auto text-base rounded-md bg-blue-600 p-2 font-medium text-yellow-50"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
