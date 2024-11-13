import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  NewProductOne,
  NewProductThree,
  NewProductFive
} from "../../../assets/myImages/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    // Fetch new products data from an API or any other data source
    // Example:
    // fetchNewProducts().then((data) => setNewProducts(data));
    const data = [
    
    ];
    setNewProducts(data);
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    slidescriptionToShow: 4,
    slidescriptionToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidescriptionToShow: 3,
          slidescriptionToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidescriptionToShow: 2,
          slidescriptionToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidescriptionToShow: 1,
          slidescriptionToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="" />
      <Slider {...settings}>
      {newProducts.map((product) => (
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
      </Slider>
    </div>
  );
};

export default NewArrivals;
