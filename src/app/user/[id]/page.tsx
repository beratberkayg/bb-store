"use client";
import { motion } from "framer-motion";
const User = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      User
    </motion.div>
  );
};

export default User;
