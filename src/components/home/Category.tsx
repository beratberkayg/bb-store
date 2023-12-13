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
    <div className="flex items-center justify-center flex-wrap gap-7 md:items-start md:justify-start md:flex md:flex-col border-b border-orange-500 md:border-none py-1 mt-1">
      <Link
        className={`first-letter:uppercase text-xl font-medium  ${
          url ? " " : "-translate-y-2 border-b border-blue-500 text-orange-500"
        } `}
        href={"/#products"}
      >
        All
      </Link>
      {categories?.map((ct, i) => (
        <Link
          className={`first-letter:uppercase text-xl font-medium  ${
            url === ct
              ? " -translate-y-3 border-b border-blue-500 text-orange-500"
              : ""
          } `}
          href={`/?category=${ct}/#products`}
          key={i}
        >
          {ct}
        </Link>
      ))}
    </div>
  );
};

export default Category;
