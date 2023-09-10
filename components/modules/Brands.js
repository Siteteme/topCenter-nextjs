import Image from "next/image";

import logo01 from "@/public/images/logo01.png"
import logo02 from "@/public/images/logo02.png"
import logo03 from "@/public/images/logo03.png"
import logo04 from "@/public/images/logo04.png"
import logo05 from "@/public/images/logo05.png"


function Brands() {

    return <>

        <section className="my-12">
            <div className="grid grid-cols-3 justify-center justify-items-center items-center  md:flex md:items-center md:justify-between">
                <Image src={logo01} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
                <Image src={logo02} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
                <Image src={logo03} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
                <Image src={logo04} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
                <Image src={logo05} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
                <Image src={logo05} alt="logo01" width="auto" height="auto" className="opacity-10 hover:opacity-100 transition-all duration-150 "/>
            </div>
        </section>
    </>

}


export default Brands