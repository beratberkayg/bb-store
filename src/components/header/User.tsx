import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const User = () => {
  return (
    <Link href={"/login"} className="text-orange-500 cursor-pointer">
      <FaUser size={30} />
    </Link>
  );
};

export default User;
