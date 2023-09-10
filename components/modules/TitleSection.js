import Arrow from "@/components/icons/Arrow";
import ArrowSmallToTop from "@/components/icons/ArrowSmallToTop";

function TitleSection({title, titleArrow}) {
    return (
        <div className=" flex items-center justify-between py-5 mt-8">
            <div className="flex items-center ">
                <h2 className="text-colorPrimary font-bold md:text-xl">{title}</h2>
                <Arrow/>
            </div>
            <div
                className="flex items-center text-[10px] md:text-base p-2 justify-between border border-[#3A3A3A] rounded-full md:p-2 hover:bg-colorPrimary/30 hover:border-transparent transition-all :translate-x-1">
                <span>{titleArrow}</span>
                <ArrowSmallToTop/>
            </div>
        </div>
    )
}


export default TitleSection;