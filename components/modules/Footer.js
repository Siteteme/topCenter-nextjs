import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/images/logo-white.png";
import WhatsApp from "@/components/icons/WhatsApp";

function Footer() {

    return <footer className="bg-[#3A3A3A] w-full p-2">
        <div className="flex items-center justify-between border-b-2 border-dashed pb-4 border-opacity-20 ">
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
                <WhatsApp/>
                <WhatsApp/>
                <WhatsApp/>
                <WhatsApp/>

            </div>
        </div>
        <div></div>

    </footer>
}

export default Footer;