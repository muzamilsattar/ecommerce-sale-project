import Carousel from 'react-bootstrap/Carousel';

function Carosel() {
  return (
    <div className="flex flex-col md:flex-row mt-1 mx-3">
      {/* Carousel Section */}
      <div className="w-full md:w-3/4">
        <Carousel data-bs-theme="dark">
          {Array.from({ length: 7 }, (_, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={`/public/${i + 1}.jpg`}
                alt={`Slide ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Side Section */}
      <div className=" md:w-1/4 mt-1 md:mt-0 md:ml-4 flex justify-center">
        <div className="flex flex-col items-center bg-[#ffeada] w-full max-w-xs p-2 rounded-lg shadow-md">
          {/* App Promotion Section */}
          <div className="flex items-center justify-center bg-transparent mb-3">
            <img
              src="/public/sm-logo.jpg"
              alt="Daraz logo"
              className="object-contain w-8 h-8 mr-2"
            />
            <span className="text-sm font-semibold text-gray-800">
              TRY DARAZ APP
            </span>
          </div>

          {/* Rating Section */}

          <span className="text-gray-600 font-mono font-medium text-center mb-3">
            Download the App now
          </span>

          {/* Free Vouchers Icons */}
          <div className="flex flex-col items-center gap-2 p-4 mb-1 shadow-lg rounded-md aside-bg">
            <div className="flex items-center justify-start gap-1 -translate-x-11 -translate-y-4 px-4">
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png"
                alt="Star"
                className="w-3 h-3"
              />
              <span className="text-gray-700 text-sm font-medium">
                4.8 Rated
              </span>
            </div>
            {/* Free Shipping */}
            <div className="flex items-center gap-2">
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
                alt="Free Shipping"
                className="w-10 h-10"
              />
              <span className="text-center text-gray-700 text-sm font-medium">
                Free <br />
                Shipping
              </span>
            </div>
            {/* Exclusive Vouchers */}
            <div className="flex items-center gap-2">
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
                alt="Exclusive Vouchers"
                className="w-10 h-10"
              />
              <span className="text-center text-gray-700 text-sm font-medium">
                Exclusive <br />
                Vouchers
              </span>
            </div>
          </div>

          {/* QR Code and App Links */}
          <div className="flex items-center justify-center gap-2">
            <img src="/public/qr.jpg" alt="QR Code" className="w-20" />
            <div className="flex flex-col items-center gap-2">
              <img
                src="/public/iphone.png"
                alt="iOS Download"
                className="w-24"
              />
              <img
                src="/public/android.png"
                alt="Android Download"
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carosel;
