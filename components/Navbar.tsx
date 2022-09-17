import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="p-2">
          <Link href="/">Home</Link>
        </div>
        <div className="p-2">
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="p-2">
          <Link href="/explore-creators">Explore Creators</Link>
        </div>
      </div>

      <div className="flex">
        <div className="p-2">
          <Link href="/login">Log in</Link>
        </div>
        <div className="p-2">
          <Link href="/login">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
