import Link from "next/link";

function PageNotFound() {
    return <>

        <div className="flex items-center justify-center h-screen flex-col">
            <h1>متاسفانه این صفحه پیدا نشد | 404</h1>
            <button className="btn-primary my-2"><Link href="/">صفحه اصلی</Link></button>
        </div>
    </>
}


export default PageNotFound;