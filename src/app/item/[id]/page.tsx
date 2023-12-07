"use client";

import { decrement, increment } from "@/redux/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getİtem } from "@/redux/slices/dataSlice";

import { useEffect, useState } from "react";

const ItemPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  console.log(id);
  const dispatch = useAppDispatch();
  const { item, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );
  const { value } = useAppSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getİtem(id));
  }, [id]);

  console.log(item);

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:items-center mt-3">
      {dataLoading && <div>Yükleniyor...</div>}
      <img
        src={item.image}
        className="w-full h-[300px] md:h-[400px] md:w-[300px] lg:w-full object-fill md:object-contain rounded-2xl"
      />
      <div className="flex flex-col items-center mt-3">
        <div className="border-b-2 border-t-2 p-1 md:border-t-0 border-red-500 text-center">
          <h2 className=" text-xl font-medium md:text-3xl text-center">
            {item.title}
          </h2>
          <div>
            <p className="text-lg font-bold md:text-2xl">{item.price}$</p>
            <div className="flex items-center justify-center gap-3 text-2xl">
              <span
                onClick={() => dispatch(decrement())}
                className="cursor-pointer"
              >
                -
              </span>
              <span>{value}</span>
              <span
                onClick={() => dispatch(increment())}
                className="cursor-pointer"
              >
                +
              </span>
            </div>
            <button className="rounded-lg p-1 bg-orange-500 text-white hover:text-orange-500 hover:bg-white text-medium">
              Sepete Ekle
            </button>
          </div>
        </div>

        <p className="text-center border-b-2 md:border-b-0 p-1 border-red-500 md:text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ItemPage;
