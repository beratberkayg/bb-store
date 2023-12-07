"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/dataSlice";
import { useEffect } from "react";
import Item from "./Item";

const Products = ({ url }: { url: string }) => {
  const dispatch = useAppDispatch();
  const { data, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );
  console.log(data);

  useEffect(() => {
    dispatch(getProducts(url));
  }, [url, dispatch]);
  return (
    <div className=" mt-3 flex flex-wrap gap-2 items-center justify-around">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
