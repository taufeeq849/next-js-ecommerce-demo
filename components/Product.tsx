export interface IProduct {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export interface Props {
  product: IProduct;
}
export function Product(props: Props) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Image */}
        <img
          className="object-fill"
          src={props.product.image}
          width="100"
          height="100"
          alt="Application 01"
        />
        {/* Card Content */}
        <div className="grow flex flex-col p-5">
          {/* Card body */}
          <div className="grow">
            {/* Header */}
            <header className="mb-3">
              <h3 className="text-lg text-gray-800 font-semibold">
                {props.product.title}
              </h3>
            </header>
            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              {/* Rating */}
              <div className="flex items-center space-x-2 mr-2">
                {/* Stars */}

                {/* Rate */}
                <div className="inline-flex text-sm font-medium text-yellow-600">
                  {props.product.category}
                </div>
              </div>
              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                  ${props.product.price}
                </div>
              </div>
            </div>
            {/* Features list */}
            <ul className="text-sm space-y-2 mb-5">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 fill-current text-gray-400 shrink-0 mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                </svg>
                <div>{props.product.description}</div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div>
            <a
              className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white"
              href="#0"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = Product;
