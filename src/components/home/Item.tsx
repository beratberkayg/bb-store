import { dataType } from "@/types/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Item = ({ item }: { item: dataType }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer border border-orange-500 rounded-xl"
      onClick={() => router.push(`/item/${item.id}`)}
    >
      <img className="w-[175px] h-[200px] rounded-xl" src={item.image} alt="" />
    </div>
  );
};

export default Item;
