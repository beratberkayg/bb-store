"use client";
import { CommentProps } from "@/types/type";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = ({
  comment,
  children,
}: {
  comment: CommentProps;
  children: React.ReactNode;
}) => {
  return (
    <div className=" bg-white shadow-md rounded-md py-1 px-2 md:p-3 w-full h-[200px] md:w-[48%] md:h-[150px] lg:w-[31%] flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-start gap-3 border-b-2 border-black py-2 ">
        <div className="text-orange-500">
          <FaUser size={35} />
        </div>
        <Link
          href={`/user/${comment.kullaniciId}`}
          className="capitalize text-xl flex items-center hover:scale-110 hover:text-orange-500"
          title="Go Profile"
        >
          {comment.kullaniciAd}
        </Link>
      </div>
      <div className="mt-2 flex gap-3 mb-5 ">
        <Link href={`/item/${comment.item.id}`}>
          <img
            className="w-20 h-20 bg-white shadow-lg shadow-gray-800 rounded-md hover:scale-105"
            src={comment.item.image}
            alt=""
            title={comment.item.title}
          />
        </Link>
        <div className=" w-full mt-3 capitalize text-start ">
          {comment.comment}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Comment;
