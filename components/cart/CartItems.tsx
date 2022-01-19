import { IProduct } from "../../types/product";
import { CartItem } from "./CartItem";

type CartItemsProps = {
  readonly products: Array<IProduct>;
};

export const CartItems = ({ products }: CartItemsProps) => (
  <ul className="-my-6 divide-y divide-gray-200">
    {products.map((product) => (
      <CartItem key={product.id} {...product} />
    ))}
  </ul>
);
