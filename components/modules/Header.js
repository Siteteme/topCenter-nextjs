import Link from "next/link";

// image
import Image from "next/image";
import logo from "@/public/images/logo.png";
// icons
import SearchIcon from "@/components/icons/SearchIcon";
import BagIcon from "@/components/icons/BagIcon";
import SignUp from "@/components/icons/SignUp";
import {IoLogOutOutline} from "react-icons/io5";

import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import LogOut from "../icons/LogOut";

const serchModalShow = () => {
  const searchModalDiv = document.getElementById("search-modal");
  if (searchModalDiv.classList.contains("hidden")) {
    searchModalDiv.classList.remove("hidden");
    searchModalDiv.classList.add("block");
  } else {
    searchModalDiv.classList.remove("block");
    searchModalDiv.classList.add("hidden");
  }
};

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setIsLoggedIn(true);
      });
  }, []);

  const logOutHandler = async () => {
    const res = await fetch("/api/auth/logout");
    const data = await res.json();
    if (data.status === "success") setIsLoggedIn(true);
  };

  return (
    <>
      <header className=" container m-auto max-w-[1280px] px-2 flex items-center justify-between h-[90px] border-b-2 border-border/25 border-dashed">
        <div id="logo">
          <Link href="/">
            <Image
              src={logo}
              className="max-w-full"
              alt="Picture of the author"
            />
          </Link>
        </div>

        <div>
          <nav>
            <ul className="hidden md:flex">
              <li className="flex ">
                <Link href="/" className="linkMenu">
                  صفحه اصلی
                </Link>
                <Link href="/shop" className="linkMenu ">
                  فروشگاه
                </Link>
                <Link href="/blog" className="linkMenu">
                  بلاگ
                </Link>
                <Link href="/about" className="linkMenu">
                  درباره ما
                </Link>
                <Link href="/contant" className="linkMenu">
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all  rounded-full  hover:stroke-white hover:fill-none  "
            onClick={serchModalShow}>
            <SearchIcon />
          </div>
          <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all  rounded-full  hover:stroke-white hover:fill-none  ">
            <BagIcon />
          </div>
          {!isLoggedIn ? (
            <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all rounded-full  hover:stroke-white hover:fill-none">
              <Link href="/auth/signup">
                <SignUp />
              </Link>
            </div>
          ) : null}

          {isLoggedIn ? (
            <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all rounded-full  hover:stroke-white hover:fill-none">
              <button onClick={logOutHandler} className="flex">
                <LogOut />
              </button>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;
