import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";

const User = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <Link
      href={`${user ? `/user/${user.uid}` : "/login"}`}
      className="text-orange-500 cursor-pointer"
    >
      <FaUser size={30} />
    </Link>
  );
};

export default User;
