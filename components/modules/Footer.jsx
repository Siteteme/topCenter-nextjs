import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/images/logo-white.png";
import WhatsApp from "@/components/icons/WhatsApp";
import YouTube from "../icons/YouTube";
import Tiweter from "../icons/Tiweter";

function Footer() {
  return (
    <footer className="bg-[#3A3A3A] p-5 w-full">
     <section className="container m-auto max-w-[1280px] px-2">
     <div className="flex items-center justify-between border-b-2 border-dashed pb-4 border-[#ffffff1e] ">
        <div>
          <Link href="/">
            <Image
              src={logoWhite}
              className="max-w-full"
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between ">
          <WhatsApp />
          <YouTube />
          <Tiweter />
        </div>
      </div>
      <div>
      <div className="flex justify-between items-center my-4 border-b-2 border-dashed pb-3 border-[#ffffff1e]">
        <div>
          <h3 className="text-white mb-3 ">خدمات مشتریان</h3>
          <ul>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">تضمین اصالت کالا</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">مشاوره رایگان</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">پشتیبانی همه روزه</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">ارسال رایگان محصولات </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-3 ">مطالب مفید</h3>
          <ul>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">لیست بهترین های تکلونوژی</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">قیمت موبایل های اقتصادی</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">ساعت های هوشمند مدل K72</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-3 ">قوانین و مقررات</h3>
          <ul>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">مجوز و گواهی نامه ها</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">قوانین گرانتی محصولات</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">تبلیغات </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-3 ">راهنما</h3>
          <ul>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">شرایط عودت کالا</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">سوالات متداول</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">راهنمای خرید</a>
            </li>
            <li className="text-[#B5B5B5] mb-2 font-thin text-sm hover:text-white transition-all">
              <a href="">درباره ما</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
     </section>
    </footer>
  );
}

export default Footer;
