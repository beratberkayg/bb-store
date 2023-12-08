"use client";
import Item from "@/components/home/Item";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "@/redux/slices/cart/cartSlice";
import Link from "next/link";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useAppSelector(
    (state) => state.carts
  );
  console.log(cartItems);

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseFromCart = (item: any) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseQuantity = (item: any) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="mt-3 flex flex-col">
      <div className="text-center text-2xl font-semibold border-b-2 mb-3 border-orange-500">
        Alışveriş Sepetiniz
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {cartItems.map((item) => (
            <div className="border-2 border-orange-500 rounded-lg p-3 flex gap-3 font-medium">
              <Link href={`/item/${item.id}`}>
                <img src={item.image} alt="" className="w-[100px]" />
              </Link>

              <div>
                <h2>{item.title}</h2>
                <p>{item.price} $</p>
                <div className="flex  items-center gap-1">
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

                <p>Toplam : {item.price * item.cartQuantity} $</p>
                <div
                  onClick={() => handleRemoveFromCart(item)}
                  className="mt-5 border-2 w-fit p-1 border-orange-500 rounded-md bg-white font-medium cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  Sepetten Sil
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 p-1 flex-1">
          <div className="text-center font-bold text-2xl border-b-2 border-orange-500">
            Sepetiniz
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
