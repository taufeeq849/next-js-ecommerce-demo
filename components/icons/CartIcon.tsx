import Image from "next/image";
interface CartIconProps {
  productInCart: boolean;
}
export default function CartIcon(props: CartIconProps) {
  if (!props.productInCart)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 group-hover:opacity-50 opacity-70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke="black"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    );
  else {
    return (
      <Image src="/remove-from-cart.png" alt="me" width={24} height={24} />
    );
  }
}
