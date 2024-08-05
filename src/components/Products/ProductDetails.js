// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Comments from '../comments'; 
// // import { products } from './product';

// const products = [
//   {
//     id: 1,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 2,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 3,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 4,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 5,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 6,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 7,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//     {
//       id: 8,
//       name: 'Navy and Orange Striped Polo T-Shirt For Men',
//       mainImage: require('../../assets/product_images/2.jpg'),
//       images: [
//         require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_2.jpg')
//       ],
//       price: '₹799',
//       discountPrice: '₹1999',
//       description: 'Solid Polos',
//       colors: ['#173F5F', '#F6D55C'],
//       sizes: ['S', 'M', 'L', 'XL', 'XXL']
//     },
//   {
//     id: 9,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 10,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 11,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 12,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '₹799',
//     discountPrice: '₹1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
// ];

// const responsive = {
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//   },
// };

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find(p => p.id === parseInt(productId));

//   const [selectedImage, setSelectedImage] = useState(product.mainImage);
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const addToCart = (product) => {
//     console.log(`Product ${product.id} added to cart`);
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push({ ...product, quantity });
//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

//   const buyNow = (product) => {
//     console.log(`Buying product ${product.id}`);
//   };

//   return (
//     <div>
//    <div className="container mx-auto p-4 mt-24 flex justify-center">
//   <div className="flex flex-col items-center md:flex-row max-w-6xl w-full">
//     <div className="block md:hidden w-full">
//       <Carousel responsive={responsive}>
//         {product.images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`${product.name} ${index + 1}`}
//             className="w-full h-72 object-cover rounded-md mb-2"
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//       </Carousel>
//     </div>
//     <div className="hidden md:flex flex-col md:flex-row items-center">
//       <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-6 lg:w-1/4 lg:mb-20">
//         {product.images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`${product.name} ${index + 1}`}
//             className={`w-40 h-40 object-cover rounded-md mb-2 cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : 'border'}`}
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//       </div>
//       <img src={selectedImage} alt={product.name} className="w-full h-112 md:w-3/4 lg:w-4/5 xl:w-5/6 md:h-128 lg:h-144 xl:h-160 object-contain rounded-md mb-4" />
//     </div>

//     <div className="md:ml-8 text-center md:text-left">
//       <h1 className="text-3xl font-bold">{product.name}</h1>  {/* Increased text size */}
//       <div className="flex items-center justify-center md:justify-start mt-2">
//         <span className="text-3xl font-bold text-green-600">{product.price}</span>  {/* Increased text size */}
//         <span className="text-2xl text-gray-400 line-through ml-2">{product.discountPrice}</span>  {/* Increased text size */}
//       </div>
//       <div className="mt-4">
//         <h3 className="text-xl font-bold">Color:</h3>  {/* Increased text size */}
//         <div className="flex justify-center md:justify-start mt-2">
//           {product.colors.map((color, index) => (
//             <div
//               key={index}
//               className={`w-8 h-8 rounded-full mr-2 ${selectedColor === color ? 'border-4 border-blue-600' : 'border'} cursor-pointer`}
//               style={{ backgroundColor: color }}
//               onClick={() => setSelectedColor(color)}
//             ></div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-4">
//         <h3 className="text-xl font-bold">Size:</h3>  {/* Increased text size */}
//         <div className="flex justify-center md:justify-start mt-2">
//           {product.sizes.map((size, index) => (
//             <div
//               key={index}
//               className={`rounded p-3 border mr-4 cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
//               onClick={() => setSelectedSize(size)}
//             >
//               {size}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-4">
//         <h3 className="text-xl font-bold">Qty:</h3>  {/* Increased text size */}
//         <div className="flex items-center justify-center md:justify-start mt-2">
//           <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
//           <span className="mx-2 text-xl">{quantity}</span>  {/* Increased text size */}
//           <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-center md:justify-start space-x-4">
//         <button className="w-full md:w-auto p-2 bg-blue-600 text-white rounded" onClick={() => addToCart(product)}>
//           Add to Cart
//         </button>
//         <button className="w-full md:w-auto p-2 bg-green-600 text-white rounded" onClick={() => buyNow(product)}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//     <div className='w-full '>
//       <Comments />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    mainImage: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/95/mod05/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
    price: '$100.00',
    discountPrice: '$150.00',
    description: 'Solid Polos',
    colors: [
      {
        name: 'Gray',
        colorCode: '#999999',
        images: [
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/95/mod05/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://signsandstickers.co.uk/wp-content/uploads/2022/09/GDPM17.jpg',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/95/mod01/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/95/mod02/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/95/mod04/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
        ]
      },
      {
        name: 'Black',
        colorCode: '#000000',
        images: [
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/96/mod01/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/96/mod02/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/96/mod03/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/96/bv/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849348/96/mod04/fnd/IND/fmt/png/Active-Mens-Slim-Fit-Polo',
        ]
      },
      {
        name: 'Blue',
        colorCode: '#6699FF',
        images: [
          require('../../assets/product_images/3.jpg'),
          require('../../assets/product_images/4.jpg'),
          require('../../assets/product_images/5.jpg'),
          require('../../assets/product_images/2.jpg'),
        ]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
];

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  const [selectedImage, setSelectedImage] = useState(product?.mainImage);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].colorCode);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    console.log(`Product ${product.id} added to cart`);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const buyNow = (product) => {
    console.log(`Buying product ${product.id}`);
  };

  const images = product.colors.find(color => color.colorCode === selectedColor).images;

  return (
    <div className="container mx-auto p-4 mt-24 flex justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Mobile carousel */}
        <div className="block md:hidden w-full mb-4">
          <Carousel responsive={responsive}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-96 object-cover rounded-md mb-4"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Carousel>
        </div>
        {/* Desktop layout */}
        <div className="flex md:flex-row md:w-full">
          {/* Small images for larger screens */}
          <div className="hidden md:flex md:flex-col md:w-1/5 mr-2 space-y-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={`w-40 h-50 object-cover cursor-pointer ${selectedImage === image ? 'border-4 border-blue-500' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          {/* Main image for larger screens */}
          <div className="md:w-4/5 ml-2 mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Product details */}
        <div className="md:w-2/5 ml-5">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p className="mt-4 text-lg text-gray-500">{product.description}</p>
          <p className="mt-4 text-2xl text-red-600">{product.discountPrice}</p>
          <p className="mt-2 text-2xl text-green-600">{product.price}</p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Color:</h3>
            <div className="flex mt-4 space-x-4">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full cursor-pointer ${selectedColor === color.colorCode ? 'border-4 border-blue-600' : ''}`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => {
                    setSelectedColor(color.colorCode);
                    setSelectedImage(color.images[0]);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Size:</h3>
            <div className="flex mt-4 space-x-4">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`rounded p-4 border cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Qty:</h3>
            <div className="flex items-center mt-4 space-x-4">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-4 border">-</button>
              <span className="text-2xl">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-4 border">+</button>
            </div>
          </div>
          <div className="mt-8 flex space-x-8">
            <button className="w-full md:w-auto p-4 bg-blue-600 text-white rounded" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="w-full md:w-auto p-4 bg-green-600 text-white rounded" onClick={() => buyNow(product)}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
