import CardProduct from "@/components/modules/CardProduct";
import TitleSection from "@/components/modules/TitleSection";

function Products({data}) {
  return (
    <section className="container m-auto w-[1280px]">
      <TitleSection
        title={"محصولات فروشگاه"}
        titleArrow={"خرید آسان از تاپ سنتر"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {data.map((pro) => (
          <CardProduct key={pro.id} {...pro} />
        ))}
      </div>
    </section>
  );
}

export default Products;
