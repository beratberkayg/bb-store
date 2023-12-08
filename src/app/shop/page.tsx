"use client";

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
      <div className=" flex flex-col gap-3">
        <div className="flex flex-wrap gap-3 items-center justify-center ">
          {cartItems.map((item) => (
            <div className="border-2 border-orange-500 rounded-lg p-3 flex flex-col  gap-3 font-medium w-full md:w-[40%] h-[490px]">
              <Link
                className="flex items-center justify-center"
                href={`/item/${item.id}`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[200px] h-[200px] object-fill"
                />
              </Link>

              <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl text-center line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-xl border-b-2 border-orange-500 w-full text-center">
                  {item.price} $
                </p>
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

                <p className="text-lg">
                  Toplam : {item.price * item.cartQuantity} $
                </p>
                <div
                  onClick={() => handleRemoveFromCart(item)}
                  className="mt-5 text-xl border-2 w-fit p-1 border-orange-500 rounded-md bg-white font-medium cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  Sepetten Sil
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-end items-end ">
            <div className="border-2 rounded-lg border-orange-500 p-3 text-xl font-medium">
              <div>Toplam Ürün Sayısı : {cartTotalQuantity}</div>
              <div>Toplam Ödemeniz : {cartTotalAmount}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
