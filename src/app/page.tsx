"use client";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Up from "@/components/home/Up";

interface ParamsType {
  [key: string]: string;
}

const Home = ({ searchParams }: { searchParams: ParamsType }) => {
  const url = searchParams.category;

  return (
    <div id="up" className="relative">
      <Hero />
      <div id="ürün" className="md:flex md:gap-3 md:justify-center ">
        <Category url={url} />
        <Products url={url} />
      </div>
      <Up />
    </div>
  );
};

export default Home;
