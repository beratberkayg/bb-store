"use client";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Up = () => {
  return (
    <Link className="absolute bottom-0 right-0 text-orange-500" href={"#up"}>
      <FaArrowAltCircleUp size={35} />
    </Link>
  );
};

export default Up;
