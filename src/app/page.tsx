"use client";
import Category from "@/components/home/Category";
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
      anasayfa
    </div>
  );
};

export default Home;
