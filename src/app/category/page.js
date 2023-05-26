'use client'
import React, { useEffect, useState } from "react";

async function getCategory() {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories?limit=10`
  );
  return res.json();
}

export default function Category() {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    getCategory().then((res) => setCate(res));
  }, []);
  return (
    <div className="flex gap-3 w-full h-auto justify-center col-span-4 min-h-min  flex-wrap ps-10 p-2 ">
      {cate.map((index) => (
        <div key={index.key}>
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={index.image}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {index.name}
              </h5>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
