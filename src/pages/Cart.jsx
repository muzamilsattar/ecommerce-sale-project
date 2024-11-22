function Cart() {
  return (
    <div className="p-4 justify-between items-start gap-1 ">
      <div className=" border-cyan-400 border-2">
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600">SELECT ALL (8 ITEM(S))</span>
          </div>
          <button className="text-gray-600">
            <i className="fas fa-trash-alt"></i> DELETE
          </button>
        </div>
        <div className="border-b py-4">
          <div className="flex items-center">
            <img
              src="https://placehold.co/50x50"
              alt="Vintage Clothing Logo"
              className="mr-4"
            />
            <div className="flex-1">
              <div className="text-lg font-bold">
                The Vintage Clothing pack of 3 plain basic T shirt
              </div>
              <div className="text-gray-600">The Vintage Clothing</div>
            </div>
            <div className="text-orange-500 text-lg font-bold">Rs. 1,154</div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Mall</span>
            </div>
            <div className="flex items-center">
              <button className="px-2 py-1 border">-</button>
              <input
                type="text"
                value="1"
                className="w-12 text-center border-t border-b"
                readOnly
              />
              <button className="px-2 py-1 border">+</button>
            </div>
            <div className="flex items-center">
              <button className="text-gray-600 mr-4">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-gray-600">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="border-b py-4">
          <div className="text-gray-600">Unavailable items (7)</div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <img
                src="https://placehold.co/50x50"
                alt="Xiaomi Mibro Color Smartwatch"
                className="mr-4"
              />
              <div className="flex-1">
                <div className="text-gray-600">
                  2021 Xiaomi Mibro Color Smartwatch 1.57 inch 5ATM Waterproof
                  Fashion SpO2 Smart Watch For
                </div>
                <div className="text-gray-600">Xiaomi, Color Family:Black</div>
                <div className="text-red-500">Out of stock</div>
              </div>
            </div>
            <div className="text-orange-500 text-lg font-bold">Rs. 2,599</div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <img
                src="https://placehold.co/50x50"
                alt="Misuli T800 Ultra Smart Watch"
                className="mr-4"
              />
              <div className="flex-1">
                <div className="text-gray-600">
                  Misuli T800 Ultra Smart Watch 1.99 HD Full Touch Screen Men
                  Bluetooth Call 44*38*13mm Magnetic
                </div>
                <div className="text-gray-600">
                  Misuli, Color Family:T800 Ultra Black
                </div>
                <div className="text-red-500">Out of stock</div>
              </div>
            </div>
            <div className="text-orange-500 text-lg font-bold">Rs. 2,069</div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <img
                src="https://placehold.co/50x50"
                alt="Men Red Winter Warm Down Jacket"
                className="mr-4"
              />
              <div className="flex-1">
                <div className="text-gray-600">
                  Men Red Winter Warm Down Jacket Casual Sleeveless Windbreaker
                  Jacket
                </div>
              </div>
            </div>
            <div className="text-orange-500 text-lg font-bold">Rs. 5,999</div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="text-gray-600">
            <i className="fas fa-trash-alt"></i> DELETE ALL
          </button>
          <button className="text-gray-600">
            <i className="fas fa-heart"></i> Move all to wishlist
          </button>
        </div>
        <div className="mt-8">
          <div className="border p-4">
            <div className="text-gray-600">Location</div>
            <div className="text-gray-800">Jatoi, Muzaffargarh,Punjab</div>
          </div>
        </div>
      </div>
      <div className="border-orange-400 border-2 p-4 align-top">
        <div className="text-gray-600">Order Summary</div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600">Subtotal (0 items)</div>
          <div className="text-gray-800">Rs. 0</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600">Shipping Fee</div>
          <div className="text-gray-800">Rs. 0</div>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="border p-2 flex-1"
          />
          <button className="bg-blue-500 text-white px-4 py-2 ml-2">
            APPLY
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">Total</div>
          <div className="text-orange-500 text-lg font-bold">Rs. 0</div>
        </div>
        <button className="bg-orange-500 text-white w-full py-2 mt-4">
          PROCEED TO CHECKOUT(0)
        </button>
      </div>
    </div>
  );
}

export default Cart;
