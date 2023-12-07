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
      <Hero />
      <div className="flex flex-col">
        <Category url={url} />
        <Products url={url} />
      </div>
    </div>
  );
};

export default Home;
