import { CommentProps } from "@/types/type";
import React from "react";

const Comment = ({ comment }: { comment: CommentProps }) => {
  return (
    <div className=" bg-white shadow-md rounded-md p-3 w-full md:w-[48%] ">
      <div>{comment.comment}</div>
      <div>sadasdasdasds</div>
    </div>
  );
};

export default Comment;
