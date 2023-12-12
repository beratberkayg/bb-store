"use client";

import Item from "@/components/home/Item";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "@/redux/slices/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useAppSelector(
    (state) => state.carts
  );
  console.log(cartItems, cartTotalAmount, cartTotalQuantity);

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseFromCart = (item: any) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseQuantity = (item: any) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getTotals(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-3 flex flex-col">
      <div className="text-center text-2xl font-semibold border-b-2 mb-3 border-orange-500">
        Alışveriş Sepetiniz
      </div>
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="border-2 rounded-lg border-orange-500 p-3 text-xl font-medium">
          <div>Toplam Ürün Sayısı : {cartTotalQuantity}</div>
          <div>Toplam Ödemeniz : {cartTotalAmount}$</div>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex flex-wrap gap-3 items-center justify-center ">
          {cartItems.map((item) => (
            <div className="bg-white shadow-md hover:scale-105 duration-300  rounded-xl">
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
                    <p className="text-2xl">{item.cartQuantity} adet</p>
                    <button
                      onClick={() => handleIncreaseQuantity(item)}
                      className=" font-extrabold text-[35px] text-blue-500"
                    >
                      +
                    </button>
                  </div>
                  <div
                    onClick={() => handleRemoveFromCart(item)}
                    className="text-xl border-2 w-fit p-1 border-orange-500 rounded-md bg-white font-medium cursor-pointer hover:bg-orange-500 hover:text-white"
                  >
                    Sepetten Sil
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
