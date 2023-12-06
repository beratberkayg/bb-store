"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getİtem } from "@/redux/slices/dataSlice";
import { useEffect } from "react";

const ItemPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  console.log(id);
  const dispatch = useAppDispatch();
  const { item, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getİtem(id));
  }, [id]);

  console.log(item);

  return (
    <div>
      {item.title} {item.category}
      <img src={item.image} alt="" className="w-48 h-48 object-cover" />
    </div>
  );
};

export default ItemPage;
