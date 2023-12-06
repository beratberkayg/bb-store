"use client";
import Category from "@/components/home/Category";
import Products from "@/components/home/Products";

interface ParamsType {
  [key: string]: string;
}

const Home = ({ searchParams }: { searchParams: ParamsType }) => {
  const url = searchParams.category;
  console.log(url);

  return (
    <div>
      <Category />
      <Products url={url} />
    </div>
  );
};

export default Home;
