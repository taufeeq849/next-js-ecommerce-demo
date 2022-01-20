import { IProduct } from "../../types/product";
import { useCart } from "../cart/hooks/useCart";
import Image from "next/image";
import CartIcon from "../icons/CartIcon";
interface ProductProps {
  product: IProduct;
}
export function Product(props: ProductProps) {
  const {
    state: { totalPrice, products, isOpen },
    dispatch,
  } = useCart();

  const addToCart = () => {
    dispatch({ type: "addProduct", payload: props.product });
    dispatch({ type: "openMenu" });
  };
  function getIcon() {
    const productInCart: boolean = products.some(
      (product) => props.product.id === product.id
    );

    return <CartIcon productInCart={productInCart} />;
  }
  return (
    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden  rounded-2xl relative">
        <Image
          width={250}
          height={300}
          className="w-full mx-auto object-fit"
          src={props.product.image}
          alt="product image"
        />
        <button onClick={addToCart}>
          <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
            {getIcon()}
          </p>
        </button>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">
            {props.product.title}
          </p>
          <p className="text-md text-gray-800 mt-0"> ${props.product.price}</p>
        </div>
      </div>
    </div>
  );
}
module.exports = Product;
