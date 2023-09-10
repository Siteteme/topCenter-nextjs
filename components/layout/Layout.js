import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

import yekanBakh from "@/assets/fonts";

function Layout({children}) {

    return (
        <section className={yekanBakh.className}>
            <Header/>
            {children}
            <Footer/>
        </section>
    )

}

export default Layout;