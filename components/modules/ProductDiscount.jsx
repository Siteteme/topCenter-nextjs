import Image from "next/image";
import product01 from "@/public/images/product01.png";
import BagIcon from "../icons/BagIcon";
function ProductDiscount() {
  return (
    <div className="bg-[#F8F9FD] py-5 rounded-sm mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        <div className="flex flex-col items-center group bg-white rounded-md  p-3 transition-all hover:shadow-xl ">
          <div className="flex items-center w-full justify-between">
            <div>
              <span className="text-[#EB4947]">۲۵٪</span>
              <span className="text-[#E0E0E0] mx-2 font-medium ">تخفیف</span>
            </div>
            <div className="flex items-center flex-end">
              <div className="bg-red-400 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-600 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-900 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] my-4 rounded-md w-full flex items-center justify-center">
            <Image src={product01} alt="prodcut" width="auto" height="auto" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="stroke-[#3374CD] fill-transparent bg-blue-100 rounded-full p-2">
              <BagIcon />
            </div>
            <button className="btn-product group-hover:bg-colorPrimary group-hover:text-blue-100 mr-2 flex-1 text-center">
              <span>۹۸۰,۰۰۰</span>
              <span className="mx-1">تومان</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center group bg-white  rounded-md p-3 transition-all hover:shadow-xl">
          <div className="flex items-center w-full justify-between">
            <div>
              <span className="text-[#EB4947]">۲۵٪</span>
              <span className="text-[#E0E0E0] mx-2 font-medium ">تخفیف</span>
            </div>
            <div className="flex items-center flex-end">
              <div className="bg-red-400 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-600 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-900 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] my-4 rounded-md w-full flex items-center justify-center">
            <Image src={product01} alt="prodcut" width="auto" height="auto" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="stroke-[#3374CD] fill-transparent bg-blue-100 rounded-full p-2">
              <BagIcon />
            </div>
            <button className="btn-product group-hover:bg-colorPrimary group-hover:text-blue-100 mr-2 flex-1 text-center">
              <span>۹۸۰,۰۰۰</span>
              <span className="mx-1">تومان</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-md  p-3  transition-all hover:shadow-xl">
          <div className="flex items-center w-full justify-between">
            <div>
              <span className="text-[#EB4947]">۲۵٪</span>
              <span className="text-[#E0E0E0] mx-2 font-medium ">تخفیف</span>
            </div>
            <div className="flex items-center flex-end">
              <div className="bg-red-400 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-600 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-900 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] my-4 rounded-md w-full flex items-center justify-center">
            <Image src={product01} alt="prodcut" width="auto" height="auto" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="stroke-[#3374CD] fill-transparent bg-blue-100 rounded-full p-2">
              <BagIcon />
            </div>
            <button className="btn-product group-hover:bg-colorPrimary group-hover:text-blue-100 mr-2 flex-1 text-center">
              <span>۹۸۰,۰۰۰</span>
              <span className="mx-1">تومان</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-md p-3  transition-all hover:shadow-xl">
          <div className="flex items-center w-full justify-between">
            <div>
              <span className="text-[#EB4947]">۲۵٪</span>
              <span className="text-[#E0E0E0] mx-2 font-medium ">تخفیف</span>
            </div>
            <div className="flex items-center flex-end">
              <div className="bg-red-400 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-600 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
              <div className="bg-red-900 w-5 h-5 rounded-full ring-2 cursor-pointer ring-white"></div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] my-4 rounded-md w-full flex items-center justify-center">
            <Image src={product01} alt="prodcut" width="auto" height="auto" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="stroke-[#3374CD] fill-transparent bg-blue-100 rounded-full p-2">
              <BagIcon />
            </div>
            <button className="btn-product group-hover:bg-colorPrimary group-hover:text-blue-100 mr-2 flex-1">
              <span>۹۸۰,۰۰۰</span>
              <span className="mx-1">تومان</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDiscount;
