import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface IProductProps {}

const Product: React.FC<IProductProps> = (props) => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const getData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(details);

  return (
    <>
      {/* {Array.from(details).map((el) => { */}
      <h1>{Object.values(details["title"])}</h1>
      <span>{Object.values(details["rating"])}</span>
      <p>{Object.values(details["description"])}</p>
      <p>{Object.values(details["stock"])}</p>
      <p>{Object.values(details["brand"])}</p>
      <p>{Object.values(details["category"])}</p>
      <span className="absolute top-4 right-5 rounded-3xl py-1 px-3 text-sm font-semibold bg-violet-800 text-white w-[83px] h-[30px]">
        -{Object.values(details["discountPercentage"])}%
      </span>
      <button className="rounded-3xl py-2 text-white font-medium bg-black text-center flex justify-center w-[90%] absolute bottom-6">
        Add to Cart
      </button>
      {/* return (
          <div
            key={el["id"]}
            className="relative rounded-md p-2 border border-slate-200 h-80 w-[305px] bg-white"
          >
            <h1>{el["title"]}</h1>
          </div>
        );
      })} */}
    </>
  );
};

export default Product;
