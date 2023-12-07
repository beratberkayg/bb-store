import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCartTotal } from "@/redux/slices/cart/cartSlice";
import { shopFunc } from "@/redux/slices/modal/modalSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { shopModal } = useAppSelector((state) => state.modal);
  const { value } = useAppSelector((state) => state.counter);
  const { carts } = useAppSelector((state) => state.carts);
  console.log(carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <Link
      href={"/shop"}
      onClick={() => dispatch(shopFunc())}
      className="text-orange-500 cursor-pointer relative"
    >
      <FaCartShopping size={30} />
      <div className="absolute -top-3 -right-2 border rounded-full w-5 h-5 flex items-center justify-center text-xl bg-white">
        {carts?.length}
      </div>
    </Link>
  );
};

export default Shop;
