// Pro

import products from './products.json'; // Make sure to adjust the path if necessary
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between bg-[#ffffff]">
        <h3 className="capitalize rounded-[2px] text-[#f57224] text-[14px] font-semibold h-[35px] leading-[35px] mr-[11px] m-2 px-[10px] text-center">
          on sale now
        </h3>
        <p className="uppercase bg-transparent border border-[#f57224] rounded-[2px] text-[#f57224] text-[14px] font-semibold h-[35px] leading-[35px] mr-[11px] m-2 px-[10px]  text-center">
          shop all products
        </p>
      </div>
      <hr />
      <div className="flex flex-wrap gap-1 justify-center bg-[#ffffff] cursor-pointer">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
