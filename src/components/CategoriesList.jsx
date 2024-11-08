const categories = [
  {
    id: '5122',
    name: 'Sunglasses',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/21fa706c7c6d6c540778ea58402d73aa.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/kids-sunglasses-552?up_id=468045306',
  },
  {
    id: '10000539',
    name: 'Dusters & Dust Cloths',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/f0ead3305eb7742d01af0e7df1534fe8.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/housekeeping-dusters?up_id=503497745',
  },
  {
    id: '4483',
    name: 'Winter Jackets & Coats',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/5b66038f6770ee775311f139546c3554.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/heavy-coats?up_id=382364138',
  },
  {
    id: '3',
    name: 'Mobiles',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/9fff709da4e1bb83089b86f1994b8a74.png_170x170q80.png',
    link: '//www.daraz.pk/smartphones?up_id=452072370',
  },
  {
    id: '10000284',
    name: 'Coffee Machines',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/9bd00d5f67c7038968798aadd388bbf6.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/espresso-machines?up_id=194694377',
  },
  {
    id: '10002334',
    name: 'Dog & Cat Beds',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/f1920b49d874d25c861325f9e058f869.png_170x170q80.png',
    link: '//www.daraz.pk/invisible-url-fmcg-6?up_id=485265567',
  },
  {
    id: '7',
    name: 'Tablets',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/7fb386cfcf8513b931e77a6ac1db0317.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/tablets?up_id=541310864',
  },
  {
    id: '10002323',
    name: 'Starter Kits',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/bf2f8759de2c23a7b8a386cfb8877920.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/aquariums-starter-kits?up_id=140676462',
  },
  {
    id: '1420',
    name: 'Blocks & Building Toys',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/df2ded39361ebbb92d16fc2fd5fe04b9.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/blocks-&-building-toys?up_id=287305987',
  },
  {
    id: '10000790',
    name: 'Knife Sharpeners & Blocks',
    image:
      'https://img.drz.lazcdn.com/static/pk/p/b460f2ca168651bd0b8f2e0e88c632da.jpg_170x170q80.jpg',
    link: '//www.daraz.pk/knife-sharpeners-1?up_id=433366808',
  },
  {
    id: '10000284',
    name: 'Face Mask',
    image: 'public/categories/facemask.jpg',
    link: '//www.daraz.pk/espresso-machines?up_id=194694377',
  },
  {
    id: '10002334',
    name: 'Jwellery Storage',
    image: 'public/categories/jwellerey.jpg',
    link: '//www.daraz.pk/invisible-url-fmcg-6?up_id=485265567',
  },
  {
    id: '7',
    name: 'Microphones',
    image: 'public/categories/microphone.jpg',
    link: '//www.daraz.pk/tablets?up_id=541310864',
  },
  {
    id: '10002323',
    name: 'Zakat ',
    image: 'public/categories/zakat.jpg',
    link: '//www.daraz.pk/aquariums-starter-kits?up_id=140676462',
  },

  {
    id: '10000790',
    name: 'Outdoor Tables',
    image: 'public/categories/outdoor.jpg',
    link: '//www.daraz.pk/knife-sharpeners-1?up_id=433366808',
  },
  {
    id: '10000284',
    name: 'Shower Caddies & Hangers',
    image: 'public/categories/hangers.jpg',
    link: '//www.daraz.pk/espresso-machines?up_id=194694377',
  },
];

// const CategoriesList = () => {
//   return (
//     <div className="flex md:flex-wrap lg:flex-wrap justify-items-center  w-[100%] min-h-[297px] flex-row  ">
//       {categories.map((category) => (
//         <div
//           key={category.id}
//           className=" cursor-pointer h-[148px] w-[12.5%] bg-[#fff] border mt-[1px] hover:shadow-inner transition duration-300 p-1 "
//         >
//           <a
//             className="block  overflow-hidden  "
//             href={category.link}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="picture-wrapper common-img">
//               <img
//                 className="w-[80px] h-[80px] my-0 mx-auto object-cover"
//                 src={category.image}
//                 alt={category.name}
//               />
//             </div>
//             <div className="card-categories-name p-2">
//               <p className="text-center text-sm font-medium text-gray-800">
//                 {category.name}
//               </p>
//             </div>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };
const CategoriesList = () => {
  return (
    <div className="flex flex-wrap justify-center w-full min-h-[297px]">
      {categories.map((category) => (
        <div
          key={category.id}
          className="cursor-pointer h-[148px] w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] xl:w-[12.5%] bg-white border mt-[1px] hover:shadow-inner transition duration-300 p-2 sm:p-3"
        >
          <a
            className="block overflow-hidden"
            href={category.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="picture-wrapper common-img">
              <img
                className="w-[80px] h-[80px] my-0 mx-auto object-cover"
                src={category.image}
                alt={category.name}
              />
            </div>
            <div className="card-categories-name p-2">
              <p className="text-center text-sm font-medium text-gray-800">
                {category.name}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
