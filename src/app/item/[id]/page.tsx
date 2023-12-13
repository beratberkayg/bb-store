"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart/cartSlice";
import { getİtem } from "@/redux/slices/dataSlice";
import { CommentProps, dataType } from "@/types/type";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import Post from "@/components/comment/Post";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/services/firebase";
import Comment from "@/components/comment/Comment";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";

const ItemPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const dispatch = useAppDispatch();
  const { item, dataLoading, dataError } = useAppSelector(
    (state) => state.data
  );

  const { cartItems } = useAppSelector((state) => state.carts);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    dispatch(getİtem(id));
    getComments();
  }, [id]);

  const addBasket = (item: dataType) => {
    dispatch(addToCart(item));
  };

  const [comments, setComments] = useState<CommentProps[]>([]);

  const getComments = async () => {
    const collectionRef = collection(db, "comments");
    const q = query(collectionRef, orderBy("tarih", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setComments(
        snap.docs.map((doc) => ({
          ...(doc.data() as CommentProps),
          id: doc.id,
        }))
      );
    });
  };

  console.log(comments);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen mt-3"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: "1",
        }}
        className="bg-white shadow-md rounded-xl flex items-center justify-center flex-col py-3 gap-3 md:flex-row   md:px-10"
      >
        <div className="w-[200px] md:w-[450px] p-3 shadow-black shadow rounded-2xl">
          <img className=" " src={item.image} alt="" />
        </div>
        <div className="flex items-center justify-center flex-col gap-1 md:gap-5 ">
          <span className="text-gray-400 uppercase text-sm md:text-lg">
            {item.category}
          </span>
          <p className="text-lg font-bold block capitalize text-center md:text-xl">
            {item.title}
          </p>
          <p className="text-lg md:text-xl font-semibold">{item.price} $</p>
          <div className="text-center md:text-lg">{item.description}</div>

          <div
            onClick={() => dispatch(addToCart(item))}
            className="cursor-pointer text-orange-500 active:to-blue-600"
          >
            <MdOutlineAddShoppingCart size={50} />
          </div>
        </div>
      </motion.div>
      {user && <Post item={item} />}
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="text-xl">User Comments</h1>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          {comments.map(
            (comment) =>
              comment.item.id === item.id && <Comment comment={comment} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ItemPage;
