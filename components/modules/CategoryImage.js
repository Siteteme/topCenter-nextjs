import Link from "next/link";

function CategoryImage() {
    return (
        <section className="grid grid-cols-2 gap-3 xl:grid-cols-6 xl:gap-5 my-4  ">
            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category01">
                    <span className="z-10">#کنسول بازی</span>
                </div>
            </Link>

            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category02">
                    <span className="z-10">#موبایل</span>
                </div>
            </Link>
            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category02">
                    <span className="z-10">#لپ تاپ</span>
                </div>
            </Link>
            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category02">
                    <span className="z-10">#هدفون</span>
                </div>
            </Link>
            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category02">
                    <span className="z-10">#مانیتور</span>
                </div>
            </Link>

            <Link href="/shop" className="linkCatImg">
                <div className="category-img bg-img-category02">
                    <span className="z-10">#آیپد</span>
                </div>
            </Link>

        </section>
    );
}

export default CategoryImage;
