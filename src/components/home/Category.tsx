import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategory } from "@/redux/slices/dataSlice";
import Link from "next/link";
import React, { useEffect } from "react";

const Category = ({ url }: { url: string }) => {
  const dispatch = useAppDispatch();
  const { categories, dataError, dataLoading } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-between flex-wrap w-full border-b border-orange-500 py-1 ">
      {categories?.map((ct, i) => (
        <Link
          className={`first-letter:uppercase md:text-xl md:font-medium ${
            url === ct
              ? " -translate-y-3 border-b border-blue-500 text-orange-500"
              : ""
          } `}
          href={`/?category=${ct}`}
          key={i}
        >
          {ct}
        </Link>
      ))}
    </div>
  );
};

export default Category;
