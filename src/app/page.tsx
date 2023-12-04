"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getData } from "@/redux/slices/dataSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );
  console.log(data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {data.map((dt) => (
        <div key={dt.id}>{dt.title}</div>
      ))}
    </div>
  );
};

export default Home;
