"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart/cartSlice";
import { getİtem } from "@/redux/slices/dataSlice";
import { dataType } from "@/types/type";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Item from "@/components/home/Item";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ItemPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const dispatch = useAppDispatch();
  const { item, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );
  const { cartItems } = useAppSelector((state) => state.carts);
  console.log(cartItems);

  useEffect(() => {
    dispatch(getİtem(id));
  }, [id]);

  const addBasket = (item: dataType) => {
    dispatch(addToCart(item));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen mt-3"
    >
      <div className="bg-white shadow-md rounded-xl flex items-center justify-center flex-col py-3 gap-3 md:flex-row  md:px-10">
        <div className="w-[200px] md:w-[450px] p-3 shadow-black shadow rounded-2xl">
          <img className=" " src={item.image} alt="" />
        </div>
        <div className="flex items-center justify-center flex-col gap-1 md:gap-5 ">
          <span className="text-gray-400 uppercase text-sm md:text-lg">
            {item.category}
          </span>
          <p className="text-lg font-bold block capitalize text-center md:text-xl">
            {item.title}
          </p>
          <p className="text-lg md:text-xl font-semibold">{item.price} $</p>
          <div className="text-center md:text-lg">{item.description}</div>

          <div
            onClick={() => dispatch(addToCart(item))}
            className="cursor-pointer text-orange-500 active:to-blue-600"
          >
            <MdOutlineAddShoppingCart size={50} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemPage;
