"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/dataSlice";
import { useEffect } from "react";
import Item from "./Item";

const Products = () => {
  const dispatch = useAppDispatch();
  const { data, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );
  console.log(data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
