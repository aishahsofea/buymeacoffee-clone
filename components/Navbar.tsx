import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import React, { useContext } from "react";

import { GlobalStateContext } from "../contexts";

const Navbar = () => {
  const { handleClose } = useContext(GlobalStateContext);
  const { user } = useUser();

  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="p-2">
          <Link href="/">
            <div className="cursor-pointer" onClick={() => handleClose()}>
              Home
            </div>
          </Link>
        </div>
        <div className="p-2">
          <Link href="/faq">
            <div className="cursor-pointer" onClick={() => handleClose()}>
              FAQ
            </div>
          </Link>
        </div>
        <div className="p-2">
          <Link href="/explore-creators">
            <div className="cursor-pointer" onClick={() => handleClose()}>
              Explore Creators
            </div>
          </Link>
        </div>
      </div>

      <div className="flex">
        {user ? (
          <div className="p-2">
            <Link href="/api/auth/logout">Log out</Link>
          </div>
        ) : (
          <>
            <div className="p-2">
              <Link href="/api/auth/login">Log in</Link>
            </div>
            <div className="p-2">
              <Link href="/api/auth/login">Sign up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
