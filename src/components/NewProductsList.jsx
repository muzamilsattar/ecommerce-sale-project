import NewProducts from './NewProducts';

// const products = [
//   {
//     product_name: 'Pack Of 2 OPPO / VIVO Handsfree Good Quality ',
//     price: 355,
//     discount: '41%',
//     currency: 'Rs.',
//     rating: 4.5,
//     ratings_count: 1176,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/8f50870c67947180cd45c8701adc193a.jpg_400x400q80.jpg_.webp',
//     wwproduct_url:
//       'https://www.daraz.pk/products/pack-of-2-oppo-vivo-handsfree-good-quality-sound-handsfree-for-android-laptops-i475417953-s2235945090.html',
//   },
//   {
//     product_name:
//       'Herbology Shampoo Base - DIY shampoo Making Recipes SLS Free ',
//     price: 200,
//     discount: '33%',
//     currency: 'Rs.',
//     rating: 4.5,
//     ratings_count: 836,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/d70d54ffe826960ce419470bbd491d89.jpg_400x400q80.jpg_.webp',
//     wwproduct_url:
//       'https://www.daraz.pk/products/herbology-shampoo-base-diy-shampoo-making-recipes-sls-free-parabens-free-sulphate-free-organic-base-i431603576-s2064557704.html',
//   },
//   {
//     product_name: 'Pack Of 2 Chia Seeds Organic For Weight Loss | Flex Seeds ',
//     price: 377,
//     discount: '6%',
//     currency: 'Rs.',
//     rating: 4.9,
//     ratings_count: 241,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/0b6fe4b9baf612227fed2510c209ad71.jpg_400x400q80.jpg_.webp',
//     wwproduct_url:
//       'https://www.daraz.pk/products/2-ke-i443690577-s2131783330.html',
//   },
//   {
//     product_name:
//       'Sweatshirt And Pajama / Trouser For Kids Baby Boys And Baby Girls ',
//     price: 749,
//     discount: '38%',
//     currency: 'Rs.',
//     rating: 4.6,
//     ratings_count: 1860,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/e2e9f70985e78a66d8240ea894283be9.jpg_400x400q80.jpg_.webp',
//     wwproduct_url: 'https://www.daraz.pk/products/-i228574412-s1449079407.html',
//   },
//   {
//     product_name: 'smart watch Y80 ULTRA Smart Watch 2.02 inch  ',
//     price: 1350,
//     discount: null,
//     currency: 'Rs.',
//     rating: 4.4,
//     ratings_count: 63,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/ed1610bac16a6aae33e598aa41e77c8c.jpg_400x400q80.jpg_.webp',
//     wwproduct_url:
//       'https://www.daraz.pk/products/y80-202-8-i478324737-s2244207918.html',
//   },
//   {
//     product_name:
//       'Trending Plain Basic Color Imported China Chiffon Georgette ',
//     price: 560,
//     discount: null,
//     currency: 'Rs.',
//     rating: 4.4,
//     ratings_count: null,
//     image_url:
//       'https://img.drz.lazcdn.com/static/pk/p/c9deb464e2d62648ff4d6944f509c483.jpg_400x400q80.jpg_.webp',
//     wwproduct_url: 'https://www.daraz.pk/products/-i438711416-s2123736343.html',
//   },
// ];
const products = [
  {
    product_name: 'Pack Of 2 OPPO / VIVO Handsfree Good Quality',
    price: 355,
    discount: '41%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 1176,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/8f50870c67947180cd45c8701adc193a.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name:
      'Herbology Shampoo Base - DIY shampoo Making Recipes SLS Free',
    price: 200,
    discount: '33%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 836,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/d70d54ffe826960ce419470bbd491d89.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'Pack Of 2 Chia Seeds Organic For Weight Loss | Flex Seeds',
    price: 377,
    discount: '6%',
    currency: 'Rs.',
    rating: 4.9,
    ratings_count: 241,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/0b6fe4b9baf612227fed2510c209ad71.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name:
      'Sweatshirt And Pajama / Trouser For Kids Baby Boys And Baby Girls',
    price: 749,
    discount: '38%',
    currency: 'Rs.',
    rating: 4.6,
    ratings_count: 1860,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/e2e9f70985e78a66d8240ea894283be9.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'smart watch Y80 ULTRA Smart Watch 2.02 inch',
    price: 1350,
    discount: null,
    currency: 'Rs.',
    rating: 4.4,
    ratings_count: 63,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/ed1610bac16a6aae33e598aa41e77c8c.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'Trending Plain Basic Color Imported China Chiffon Georgette',
    price: 560,
    discount: null,
    currency: 'Rs.',
    rating: 4.4,
    ratings_count: null,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/c9deb464e2d62648ff4d6944f509c483.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name:
      'Shaving Machine For Men - Rechargeable Electric Hair Trimmer And Clipper - Shaving Machine',
    price: 899,
    discount: '40%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 1338,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/3f679abbdf5dd118758fb141f9853a6f.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name:
      '1pc Quickly Dry Hair Hat Super Absorbent Soft Bathroom Women Head Towels Girls Cute Hair Towel Hair Dry Wrap Bonnets',
    price: 440,
    discount: '50%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 286,
    image_url:
      'https://img.drz.lazcdn.com/g/kf/Sc5ab4bcb1a5a4ac8b0867223e2e6c4a0k.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'USB Cable For Android, iPhone, and Type-C Phones',
    price: 350,
    discount: '35%',
    currency: 'Rs.',
    rating: 4.7,
    ratings_count: 1200,
    image_url:
      'https://img.drz.lazcdn.com/g/kf/Sca3506538bf84a67a23b61794143e27d3.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'Bluetooth Wireless Earbuds With Charging Case',
    price: 1200,
    discount: '25%',
    currency: 'Rs.',
    rating: 4.6,
    ratings_count: 542,
    image_url:
      'https://img.drz.lazcdn.com/g/kf/Scf61f91ef9e14645adcb6aae0a966652T.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'Portable Blender - USB Rechargeable',
    price: 1500,
    discount: '30%',
    currency: 'Rs.',
    rating: 4.8,
    ratings_count: 672,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/7d717f94ec884558c54af356fea6cb33.jpg_400x400q80.jpg_.webp',
  },
  {
    product_name: 'Wireless Mouse - Ergonomic Design',
    price: 750,
    discount: '10%',
    currency: 'Rs.',
    rating: 4.3,
    ratings_count: 530,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/68eae44758e12cfb92b324c267dfbce4.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'Foldable Laptop Stand - Adjustable Height',
    price: 1100,
    discount: '15%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 890,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/09c770c9f0747c0414afb154fd61134d.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'LED Desk Lamp - Touch Control and Dimmable',
    price: 1800,
    discount: '40%',
    currency: 'Rs.',
    rating: 4.7,
    ratings_count: 1321,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/8b8630aaf578b62e4b14969de1a0490a.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'Smartphone Holder Stand - Adjustable and Portable',
    price: 450,
    discount: '20%',
    currency: 'Rs.',
    rating: 4.2,
    ratings_count: 804,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/2c221f6a6d05c3ac6ab6d6e733d31d03.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'Mini Vacuum Cleaner - Cordless Handheld',
    price: 2200,
    discount: '10%',
    currency: 'Rs.',
    rating: 4.4,
    ratings_count: 965,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/ef0acaeed1c9c4a0b9a434a9b3a82c94.png_400x400q75.png_.webp',
  },
  {
    product_name: 'Smartwatch with Fitness Tracker and Heart Rate Monitor',
    price: 3500,
    discount: '15%',
    currency: 'Rs.',
    rating: 4.6,
    ratings_count: 320,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/dffdb838bd9d593d1af60cbec55ef7bc.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'LED Strip Lights - Smart RGB Lights with App Control',
    price: 999,
    discount: '25%',
    currency: 'Rs.',
    rating: 4.2,
    ratings_count: 436,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/695303200c70f380b486385f07c2178c.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'Portable Power Bank - 10000mAh Fast Charging',
    price: 1299,
    discount: '20%',
    currency: 'Rs.',
    rating: 4.5,
    ratings_count: 500,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/a19c44d62c2dc1d0a277470d255f92c7.jpg_400x400q75.jpg_.webp',
  },
  {
    product_name: 'Electric Handheld Milk Frother - Battery Operated',
    price: 650,
    discount: '25%',
    currency: 'Rs.',
    rating: 4.7,
    ratings_count: 1000,
    image_url:
      'https://img.drz.lazcdn.com/static/pk/p/fa3cab29ba3ec28967000fdb263d3214.jpg_400x400q75.jpg_.webp',
  },
];

const NewProductsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-2">
      {products.map((product, index) => (
        <NewProducts key={index} product={product} />
      ))}
    </div>
  );
};

export default NewProductsList;
