import { dataType } from "@/types/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Item = ({ item }: { item: dataType }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer border-2 border-orange-500 rounded-xl relative"
      onClick={() => router.push(`/item/${item.id}`)}
    >
      <img
        className="w-[175px] h-[200px] rounded-xl lg:w-[350px] lg:h-[300px]"
        src={item.image}
        alt=""
      />
      <div className="absolute bottom-0 left-0 text-center w-full text-xl text-white shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md line-clamp-1 rounded-b-xl">
        {item.title}
      </div>
      <div className="absolute top-1 right-1 bg-[#03001417] backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center font-bold bg-orange-500">
        {item.price}$
      </div>
    </div>
  );
};

export default Item;
