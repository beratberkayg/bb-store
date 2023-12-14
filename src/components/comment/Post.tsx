"use client";

import { auth, db } from "@/services/firebase";
import { dataType } from "@/types/type";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

interface postType {
  comment: string | string[];
}

const Post = ({ item }: { item: dataType }) => {
  const [user, loading] = useAuthState(auth);
  const [post, setPost] = useState<postType>({
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.comment.length < 2) {
      toast.error("Please enter a comment", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    }
    const collectionRef = collection(db, "comments");
    await addDoc(collectionRef, {
      ...post,
      tarih: serverTimestamp(),
      id: item.id,
      kullaniciAd: user?.displayName,
      kullaniciId: user?.uid,
      item: item,
    });
    setPost({ comment: "" });

    toast.success("Comment added successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 bg-white shadow-md rounded-md p-3"
    >
      <textarea
        onChange={(e) =>
          setPost({
            ...post,
            comment: e.currentTarget.value,
          })
        }
        id="message"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
        placeholder="Write your thoughts here..."
      />
      <div className="w-full flex items-end justify-end mt-3">
        <button
          type="submit"
          className="bg-orange-500 rounded-xl text-white px-3 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Post;
