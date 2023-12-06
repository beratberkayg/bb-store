import React from "react";
import { FaUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userFunc } from "@/redux/slices/modal/modalSlice";
import Link from "next/link";

const User = () => {
  const dispatch = useAppDispatch();
  const { userModal } = useAppSelector((state) => state.modal);

  return (
    <div
      onClick={() => dispatch(userFunc())}
      className="text-orange-500 cursor-pointer"
    >
      <FaUser size={30} />
      {userModal && (
        <div className="absolute right-3 top-16 border-black border flex flex-col p-3 rounded-lg gap-1 text-lg text-center bg-[#ffdee9]">
          <Link
            className="border-b py-1 border-orange-500 hover:text-black"
            href={"/login"}
          >
            Giriş Yap
          </Link>
          <Link
            className=" border-orange-500 hover:text-black"
            href={"/register"}
          >
            Kayıt Ol
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
