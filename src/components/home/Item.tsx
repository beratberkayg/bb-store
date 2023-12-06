import { dataType } from "@/types/type";
import { useRouter } from "next/navigation";
import React from "react";

const Item = ({ item }: { item: dataType }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/item/${item.id}`)}
    >
      {item.title}
    </div>
  );
};

export default Item;
