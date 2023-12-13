"use client";
import Comment from "@/components/comment/Comment";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/auth/authSlice";
import { auth, db } from "@/services/firebase";
import { CommentProps } from "@/types/type";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa";
import { BsTrash2Fill } from "react-icons/bs";
const User = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logout());
    router.push("/");
  };

  const [comments, setComments] = useState<CommentProps[]>([]);

  const [user, loading] = useAuthState(auth);

  console.log(user?.uid);

  const getData = async () => {
    if (loading) return;
    if (!user) return router.push("/");

    const collectionRef = collection(db, "comments");
    const q = query(collectionRef, where("kullaniciId", "==", params.id));
    const unsub = onSnapshot(q, (snap) => {
      setComments(
        snap.docs?.map((doc) => ({
          ...(doc.data() as CommentProps),
          id: doc.id,
        }))
      );
    });
  };

  const deleteComment = async (id: string) => {
    const docRef = doc(db, "comments", id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <motion.div
      className="mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white shadow-md rounded-md flex items-center justify-center p-3 flex-col gap-3">
        <div className="border-black border rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] text-center flex items-center justify-center text-3xl md:text-[100px]">
          <FaUser />
        </div>
        <div className="text-center">
          <p className=" first-letter:uppercase">{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-black hover:text-orange-500 hover:transition-all"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <h1 className="text-xl">Comments</h1>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment}>
              <div className="flex justify-end">
                <button onClick={() => deleteComment(comment.id)}>
                  <BsTrash2Fill color={"red"} cursor={"pointer"} size={30} />
                </button>
              </div>
            </Comment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default User;
