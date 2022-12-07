import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = (props) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(items);

  return (
    <>
      <div className="text-center mt-16 mb-16 text-5xl font-bold text-slate-700">
        See Products
      </div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => getData()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="container mx-auto grid grid-cols-4 gap-5">
          {items.map((el) => {
            return (
              <div
                key={el["id"]}
                className="relative rounded-md p-2 border border-slate-200 h-80 w-[305px] bg-white"
              >
                <img
                  src={el["thumbnail"]}
                  alt=""
                  className="rounded-md bg-cover bg-center h-[149px] w-[282px]"
                />
                <div className="container flex justify-between mt-2">
                  <h1 className="text-xl font-bold text-slate-700 max-w-[70%] truncate pt-1">
                    {el["title"]}{" "}
                  </h1>
                  <h1 className="text-2xl font-bold text-slate-700">
                    {el["price"]} $
                  </h1>
                </div>
                <p className="leading-5 text-base w-2/3 h-[40px] text-ellipsis overflow-hidden text-slate-700">
                  {el["description"]}
                </p>
                <span className="absolute top-4 right-5 rounded-3xl py-1 px-3 text-sm font-semibold bg-violet-800 text-white w-[83px] h-[30px]">
                  -{el["discountPercentage"]}%
                </span>
                <button
                  onClick={() => navigate(`/products/${el["id"]}`)}
                  className="rounded-3xl py-2 text-white font-medium bg-black text-center flex justify-center w-[90%] absolute bottom-6"
                >
                  See details
                </button>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Products;
