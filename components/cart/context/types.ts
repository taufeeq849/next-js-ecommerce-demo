import { IProduct } from "../../../types/product";

export type Action =
  | { type: "addProduct"; payload: IProduct }
  | { type: "deleteProduct"; payload: IProduct }
  | { type: "openMenu" }
  | { type: "closeMenu" };

export type State = {
  readonly products: Array<IProduct>;
  readonly totalPrice: number;
  readonly isOpen: boolean;
};
