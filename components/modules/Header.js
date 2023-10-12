import Link from "next/link";

// image
import Image from "next/image";
import logo from "@/public/images/logo.png";
// icons
import SearchIcon from "@/components/icons/SearchIcon";
import BagIcon from "@/components/icons/BagIcon";
import SignUp from "@/components/icons/SignUp";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between h-[90px] border-b-2 border-border/25 border-dashed">
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
          <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all  rounded-full  hover:stroke-white hover:fill-none  ">
            <SearchIcon />
          </div>
          <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all  rounded-full  hover:stroke-white hover:fill-none  ">
            <BagIcon />
          </div>
          <div className="hover:bg-colorPrimary p-2 stroke-black fill-none transition-all rounded-full  hover:stroke-white hover:fill-none">
            <Link href="/auth/signup">
              <SignUp />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
