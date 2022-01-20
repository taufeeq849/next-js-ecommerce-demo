import Image from "next/image";
import { IProduct } from "../../types/product";
import { useCart } from "./hooks/useCart";

type CartItemProps = IProduct;

export const CartItem = (product: CartItemProps) => {
  const { id, title, description, price, image } = product;
  const { dispatch } = useCart();

  const handleDelete = (product: IProduct) => {
    dispatch({ type: "deleteProduct", payload: product });
  };

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <Image
          src={image}
          width={200}
          height={200}
          alt="product image"
          className="w-full h-full object-center object-fit"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{title}</h3>
          <p className="ml-4">${price}</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              onClick={() => handleDelete(product)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
