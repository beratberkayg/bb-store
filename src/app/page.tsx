"use client";
import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";

interface ParamsType {
  [key: string]: string;
}

const Home = ({ searchParams }: { searchParams: ParamsType }) => {
  const url = searchParams.category;

  return (
    <div>
      {/* <Category />
      <Products url={url} /> */}

      <Hero />
    </div>
  );
};

export default Home;
