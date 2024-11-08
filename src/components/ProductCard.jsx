// // ProductCard.js

// const ProductCard = ({ product }) => {
//   return (
//     <div className="  overflow-hidden p-1  hover:shadow-xl ">
//       <img
//         className="w-48 h-48 object-cover"
//         src={product.image}
//         alt={product.name}
//       />
//       <div className="px-2 py-2 ">
//         <p className="font-bold text-sm mb-2 ">{product.name}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-gray-700 text-base">Rs. {product.price}</span>
//           <span className="text-red-500 text-sm line-through">
//             Rs. {product.originalPrice}
//           </span>
//         </div>
//         <p className="text-green-600 text-sm">-{product.discount}%</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ProductCard.js
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block overflow-hidden p-1 hover:shadow-xl"
    >
      <img
        className="w-48 h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-2 py-2 ">
        <p className="font-bold text-sm mb-2 ">{product.name}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-base">Rs. {product.price}</span>
          <span className="text-red-500 text-sm line-through">
            Rs. {product.originalPrice}
          </span>
        </div>
        <p className="text-green-600 text-sm">-{product.discount}%</p>
      </div>
    </Link>
  );
};

export default ProductCard;
