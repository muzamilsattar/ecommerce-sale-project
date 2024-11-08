const NewProducts = ({ product }) => {
  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={product.image_url}
        alt={product.product_name}
        className="w-full h-48 object-cover"
      />

      <div className="p-2">
        <h2 className="text-md font-semibold text-gray-800">
          {product.product_name}
        </h2>
        <p className="text-xl font-bold text-primary mt-2">
          {product.currency} {product.price}
          {product.discount && (
            <span className="text-red-500 text-sm ml-2">
              ({product.discount} off)
            </span>
          )}
        </p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-500">Rating: {product.rating} ⭐</p>
          <p className="text-sm text-gray-400">
            {product.ratings_count || 'No reviews'}
          </p>
        </div>

        <a
          href={product.product_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          View Product
        </a>
      </div>
    </div>
  );
};

export default NewProducts;
