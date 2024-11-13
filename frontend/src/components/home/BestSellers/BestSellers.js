import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import {
  BestProductFive,
  BestProductTwelve,
  BestProductTwo,
  BestProductEight,
} from "../../../assets/myImages/index";

const BestSellers = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    // Fetch new products data from an API or any other data source
    // Example:
    // fetchBestProducts().then((data) => setBestProducts(data));
    const data = [
     
      {
        _id: "65d78dcf8d90eb34605cd027",
        image: BestProductTwo,
        productName: "Dolce & Gabanna",
        price: "275.00",
        color: "Gold",
        badge: true,
        description: "Exciting Pack Of 3",
      }
    ];
    setBestProducts(data);
  }, []);
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {bestProducts.map((product) => (
          <div key={product._id} className="px-2">
            <Product product={product}
              _id={product._id}
              image={product.image}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
