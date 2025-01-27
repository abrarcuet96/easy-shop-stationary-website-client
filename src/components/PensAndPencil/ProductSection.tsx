import { Carousel } from "primereact/carousel";
import ProductCard from "../ProductCard/ProductCard";
import { TProductSectionData } from "./pensAndPencil.data";
type TProps = {
  header: string;
  productData: TProductSectionData[];
};
const ProductSection = ({ header, productData }: TProps) => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const productTemplate = (item: TProductSectionData) => {
    return (
      <div className="px-3">
        <ProductCard item={item} />
      </div>
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto h-auto flex flex-col mt-20">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-semibold text-center">{header}</h1>
      </div>
      <div className="card">
        <Carousel
          value={productData}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          itemTemplate={productTemplate}
        />
      </div>
      <div className="text-center mt-10">
        <button className="border border-orange-500 p-2 hover:border-orange-600 text-orange-500 hover:text-orange-600 hover:bg-slate-50 font-semibold">
          Show More
        </button>
      </div>
    </div>
  );
};
export default ProductSection;
