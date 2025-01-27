import Banner from "../../components/Banner/Banner";
import Collections from "../../components/Collections/Collections";
import ProductSection from "../../components/PensAndPencil/ProductSection";
import { notebooksData } from "../../components/PensAndPencil/notebooks.data";
import { penAndPencilsData } from "../../components/PensAndPencil/pensAndPencil.data";

const Home = () => {
  return (
    <div>
      <Banner />
      <Collections />
      {/* Pen and Pencils */}
      <ProductSection
        header="Pen and Pencils"
        productData={penAndPencilsData}
      />
      <ProductSection header="Notebooks" productData={notebooksData} />
      
    </div>
  );
};
export default Home;
