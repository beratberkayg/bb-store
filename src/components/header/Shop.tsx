import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { shopFunc } from "@/redux/slices/modal/modalSlice";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { shopModal } = useAppSelector((state) => state.modal);
  return (
    <Link
      href={"/shop"}
      onClick={() => dispatch(shopFunc())}
      className="text-orange-500 cursor-pointer"
    >
      <FaCartShopping size={30} />
    </Link>
  );
};

export default Shop;
