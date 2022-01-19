import React, { useState } from "react";
import { IProduct } from "./Product";
//@ts-ignore
import Product from "./Product";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetcher from "../utils/fetcher";
import { GetStaticProps } from "next";
import axios from "axios";
interface ShopProps {
  productData: any;
}
export default function Shop(props: ShopProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Page header */}
          <div className="mb-5">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
              Find the right product for you ✨
            </h1>
          </div>

          {/* Search form */}
          <div className="max-w-xl mb-5">
            <form className="relative">
              <label htmlFor="app-search" className="sr-only">
                Search
              </label>
              <input
                id="app-search"
                className="form-input w-full pl-9 py-3 focus:border-gray-300"
                type="search"
                placeholder="Search…"
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Cards 1 (Video Courses) */}
          <div className="relative m-3 flex flex-wrap mx-auto justify-center">
            {props.productData.map((singleProduct: IProduct) => {
              const product: IProduct = {
                id: singleProduct.id,
                category: singleProduct.category,
                description: singleProduct.description,
                image: singleProduct.image,
                price: singleProduct.price,
                title: singleProduct.title,
              };
              return <Product product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
