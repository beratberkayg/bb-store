"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/dataSlice";
import { useEffect } from "react";
import Item from "./Item";
import { motion } from "framer-motion";

const Products = ({ url }: { url: string }) => {
  const dispatch = useAppDispatch();
  const { data, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getProducts(url));
  }, [url, dispatch]);

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildre: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className=" mt-3 flex flex-wrap gap-5 items-center  justify-center md:justify-evenly"
    >
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default Products;
