import Slider from "@/components/modules/Slider";
import CategoryImage from "@/components/modules/CategoryImage";
import TitleSection from "@/components/modules/TitleSection";
import CardProduct from "@/components/modules/CardProduct";
import Brands from "@/components/modules/Brands";
import BannerBottom from "@/components/modules/BannerBottom";
import ProductDiscount from "../modules/ProductDiscount";

function HomePage({data}) {
  return (
    <>
      <Slider />
      <CategoryImage />
      <TitleSection title="جدیدترین محصولات" titleArrow="مشاهده همه محصولات" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {data.map((pro) => (
          <CardProduct key={pro.id} {...pro} />
        ))}
      </section>
      <Brands />
      <BannerBottom />

      <TitleSection title="محصولات تخفیف دار" titleArrow="مشاهده همه محصولات" />

      <ProductDiscount />
    </>
  );
}

export default HomePage;
