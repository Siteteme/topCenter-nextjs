import Image from "next/image";
import Banner from "@/public/images/Banner.png";

function BannerBottom() {


    return <>

        <Image src={Banner} alt="logo01" className="max-w-full"/>

    </>

}


export default BannerBottom;