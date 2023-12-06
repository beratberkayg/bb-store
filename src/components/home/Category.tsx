import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategory } from "@/redux/slices/dataSlice";
import Link from "next/link";
import React, { useEffect } from "react";

const Category = () => {
  const dispatch = useAppDispatch();
  const { categories, dataError, dataLoading } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  console.log(categories);

  return (
    <div className="flex justify-around">
      {categories?.map((ct, i) => (
        <Link href={`/?category=${ct}`} key={i}>
          {ct}
        </Link>
      ))}
    </div>
  );
};

export default Category;
