import { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);

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
      <div className="h-32 text-4xl font-bold flex justify-center align-middle top-9">
        See Products
      </div>
      <div className="container mx-auto h-20 grid grid-cols-4 gap-4">
        {items.map((el) => {
          return (
            <div
              key={el["id"]}
              className="relative rounded-md p-2 border border-slate-200 h-80 w-[300px]"
            >
              <img
                src={el["thumbnail"]}
                alt=""
                className="rounded-md bg-cover bg-center h-36 w-72"
              />
              <h1 className="text-lg font-bold">
                {el["title"]}
                {el["price"]} $
              </h1>
              <p>{el["description"]}</p>
              <span className="absolute top-4 right-4 rounded-3xl py-1 px-3 text-sm font-semibold bg-violet-800 text-white ">
                -{el["discountPercentage"]}%
              </span>
              <button className="rounded-3xl py-2 text-white bg-black text-center flex justify-center">
                See details
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
