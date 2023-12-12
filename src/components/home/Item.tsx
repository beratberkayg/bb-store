"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart/cartSlice";
import { dataType } from "@/types/type";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Item = ({ item }: { item: dataType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white shadow-md hover:scale-105 duration-300  rounded-xl">
      <Link
        href={`/item/${item.id}`}
        className="flex items-center justify-center py-3"
      >
        <img
          src={item.image}
          className="h-48 w-40 object-fit rounded-xl"
          alt=""
        />
      </Link>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 uppercase text-sm">{item.category}</span>
        <p className="text-lg font-bold block truncate capitalize">
          {item.title}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold my-3">{item.price} $</p>
          <div
            onClick={() => dispatch(addToCart(item))}
            className="cursor-pointer text-orange-500"
          >
            <MdOutlineAddShoppingCart size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
