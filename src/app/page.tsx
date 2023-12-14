"use client";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Up from "@/components/home/Up";
import { clearCart } from "@/redux/slices/cart/cartSlice";
import { auth } from "@/services/firebase";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

interface ParamsType {
  [key: string]: string;
}

const Home = ({ searchParams }: { searchParams: ParamsType }) => {
  const url = searchParams.category;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <Hero />
      <div id="products" className="md:flex md:gap-3 md:justify-center ">
        <Category url={url} />
        <Products url={url} />
      </div>
      <Up />
    </motion.div>
  );
};

export default Home;
