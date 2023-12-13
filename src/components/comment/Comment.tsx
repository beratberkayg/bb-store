"use client";
import { CommentProps } from "@/types/type";
import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = ({ comment }: { comment: CommentProps }) => {
  return (
    <div className=" bg-white shadow-md rounded-md p-1 md:p-3 w-full h-[120px] md:w-[48%] md:h-[150px] lg:w-[31%] flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-start gap-3 border-b-2 border-black py-2 ">
        <div className="text-orange-500">
          <FaUser size={35} />
        </div>

        <div className="capitalize text-xl flex items-center">
          {comment.kullaniciAd}{" "}
        </div>
      </div>
      <div className=" mt-3 capitalize text-start">{comment.comment}</div>
    </div>
  );
};

export default Comment;
