import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

import yekanBakh from "@/assets/fonts";

function Layout({children}) {

    return (
        <section className={yekanBakh.className}>
            <Header/>
            <section className="min-h-screen">
                {children}
            </section>
            <Footer/>
        </section>
    )

}

export default Layout;