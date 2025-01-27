import { AiOutlineHeart } from "react-icons/ai";
import { TProductSectionData } from "../PensAndPencil/pensAndPencil.data";
type TItem = {
  item: TProductSectionData;
};
const ProductCard = ({ item }: TItem) => {
  return (
    <div className="w-64 h-[400px] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative">
        <a href="#">
          <img
            className="w-full h-64 object-cover"
            src={item.image}
            alt="product"
          />
        </a>
        <p className="text-md text-gray-500 dark:text-gray-400 line-clamp-2 p-3">
          {item.description}
        </p>
        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          <AiOutlineHeart className="text-gray-600 w-5 h-5 hover:text-red-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-3 ">
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            ${item.price}
          </p>
          <button className="px-3 py-1 text-sm font-medium text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 flex justify-center items-center">
            <svg
              className="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
