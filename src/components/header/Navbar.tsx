"use client";
import Logo from "./Logo";
import Shop from "./Shop";
import User from "./User";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-3 border-black border-b mt-3">
      <Logo />
      <div className="flex items-center gap-3">
        <Shop />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
