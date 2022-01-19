import React, { useState } from "react";
//@ts-ignore
import Product from "../product/Product";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetcher from "../../utils/fetcher";
import { GetStaticProps } from "next";
import axios from "axios";
import { IProduct } from "../../types/product";
import { useCart } from "../cart/hooks/useCart";
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
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
