import React from "react";
import Link from "next/link";
import { FaShop } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center text-xl">
      <div className="text-orange-500">
        <FaShop size={30} />
      </div>
      <h1 className="text-3xl font-medium">BB</h1>
      <span>Shop</span>
    </Link>
  );
};

export default Logo;
