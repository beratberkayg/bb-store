"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "@/redux/slices/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useAppSelector(
    (state) => state.carts
  );

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseFromCart = (item: any) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseQuantity = (item: any) => {
    dispatch(addToCart(item));
  };

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    dispatch(getTotals(cartItems));
  }, [cartItems]);

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildre: 0.1,
      },
    },
  };
  const animate = {
    hidden: {
      opacity: 0,
      translateY: 30,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-3 flex flex-col "
    >
      <div className="text-center text-2xl font-semibold border-b-2 mb-3 border-orange-500">
        Alışveriş Sepetiniz
      </div>

      <div className=" flex flex-col gap-3">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-wrap gap-5 items-center justify-center "
        >
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              variants={animate}
              className="bg-white shadow-md hover:scale-105 duration-300  rounded-xl"
            >
              <Link
                className="flex items-center justify-center py-3"
                href={`/item/${item.id}`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-48 w-40 object-fit rounded-xl"
                />
              </Link>
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 uppercase text-sm">
                  {item.category}
                </span>
                <p className="text-lg font-bold block truncate capitalize">
                  {item.title}
                </p>
                <p className="text-lg font-semibold my-3">{item.price} $</p>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center  items-center gap-1">
                    <button
                      onClick={() => handleDecreaseFromCart(item)}
                      className=" font-extrabold text-[40px] text-red-500"
                    >
                      -
                    </button>
                    <p className="text-2xl">{item.cartQuantity} </p>
                    <button
                      onClick={() => handleIncreaseQuantity(item)}
                      className=" font-extrabold text-[35px] text-blue-500"
                    >
                      +
                    </button>
                  </div>
                  <div
                    onClick={() => handleRemoveFromCart(item)}
                    className=" cursor-pointer text-red-600 hover:scale-125 "
                  >
                    <FaTrash size={30} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className=" flex flex-col items-center justify-center mt-3"
      >
        <motion.div
          variants={animate}
          transition={{
            duration: 1,
          }}
          className="border-2 rounded-lg border-orange-500 p-3 text-xl font-medium bg-orange-500"
        >
          <div>Total Product : {cartTotalQuantity}</div>
          <div>Total Payment : {cartTotalAmount}$</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Shop;
