import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { auth, db } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Hero = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="flex justify-center items-center flex-wrap md:flex-nowrap mt-3">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "0.5" }}
        className="flex flex-col lg:gap-5"
      >
        <h1 className="text-2xl lg:text-[50px] font-bold text-center text-orange-500">
          Welcome!{" "}
          <span className=" capitalize">{user && user.displayName}</span>
        </h1>
        <p className="text-sm md:text-lg lg:text-xl flex flex-col">
          The new and exciting address for shopping is here! Highlight the
          latest trends, your style and benefit from special discounts. Get
          ready for a wonderful shopping experience that is just a click away.
          <Link
            href={"#products"}
            className="cursor-pointer w-fit border-b-2 p-1 border-orange-500"
          >
            Check it out now!
          </Link>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: "1",
        }}
        className="relative w-[100%] h-[300px] md:w-[150%] lg:w-[100%] md:h-[500px] mx-auto -z-10"
      >
        <Image fill src="/shop.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
