import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-wrap md:flex-nowrap mt-3">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "0.5" }}
        className="flex flex-col lg:gap-5"
      >
        <h1 className="text-2xl lg:text-[50px] font-bold text-center text-orange-500">
          Hoş Geldin!
        </h1>
        <p className="text-sm md:text-lg lg:text-xl flex flex-col">
          Alışverişin yeni ve heyecan verici adresi burada! En yeni trendleri
          keşfedin, tarzınızı öne çıkarın ve özel indirimlerden faydalanın.
          Sadece bir tık uzağınızdaki harika alışveriş deneyimine hazır olun.
          <Link
            href={"#products"}
            className="cursor-pointer w-fit border-b-2 p-1 border-orange-500"
          >
            Hemen göz atın!
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
