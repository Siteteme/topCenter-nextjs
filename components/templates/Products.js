import CardProduct from "@/components/modules/CardProduct";
import TitleSection from "@/components/modules/TitleSection";

function Products({data}) {
    return (
        <>
            <TitleSection title={"محصولات فروشگاه"} titleArrow={"همه ی محصولات"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {data.map((pro) => <CardProduct key={pro.id} {...pro}  />)}
            </div>
        </>
    );
}

export default Products;