// ProductDetails.js
import { useParams } from 'react-router-dom';
import products from './products.json'; // Make sure the path is correct

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-5">
      <div className="flex gap-5">
        <img
          className="w-60 h-60 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="p-7">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg mt-2">Rs. {product.price}</p>
          <p className="text-red-500 text-sm line-through">
            Rs. {product.originalPrice}
          </p>
          <p className="text-green-600 text-sm mt-1">-{product.discount}%</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <button className="bg-orange-500 text-white font-semibold px-4 py-2 mt-4 rounded-md hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
