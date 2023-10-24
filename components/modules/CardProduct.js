/* eslint-disable @next/next/no-img-element */
import Heart from "@/components/icons/Heart";
import Link from "next/link";
import ArrowBtn from "@/components/icons/ArrowBtn";

function CardProduct(props) {
  const {id, title, price, image} = props;

  return (
    <div className="flex items-center flex-col justify-center gap-3 transition-all hover:shadow-xl  rounded-[10px] group relative">
      <div className="bg-[#F8F9FD] w-full relative rounded-[10px] ">
        <span className=" flex items-center justify-center z-10 absolute  ">
          <Heart />
        </span>
        <div className="w-full h-auto hover:bg-white transition-all rounded overflow-hidden group-hover:mix-blend-darken mix-blend-darken flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="bg-[#F8F9FD] w-[250px] h-[350px] object-contain relative rounded  overflow-hidden  "
          />
        </div>
      </div>
      <div className="w-full px-2">
        <div className="h-[60px] text-center">
          <h2 className="my-1 group-hover:text-colorPrimary truncate">
            {title}
          </h2>
        </div>
        <div className="flex justify-between w-full items-center ">
          <div className="flex items-center justify-between">
            {price ? (
              <span className="ml-1 text-[#979797] text-[9px] xl:text-sm">
                تومان
              </span>
            ) : null}
            {price ? (
              <span className="">{price}</span>
            ) : (
              <span className="text-red-500"> ناموجود </span>
            )}
          </div>
          <div className="p-2">
            <Link href={`/shop/${id}`}>
              <button className="bg-btnBg text-white p-2 rounded-[10px] text-center group-hover:bg-colorPrimary transition-all flex items-center justify-between text-[9px] outline-none xl:text-sm ">
                مشاهده محصول
                <span className="mr-2">
                  <ArrowBtn />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
