import Slider from "@/components/modules/Slider";
import CategoryImage from "@/components/modules/CategoryImage";
import TitleSection from "@/components/modules/TitleSection";
import CardProduct from "@/components/modules/CardProduct";
import Brands from "@/components/modules/Brands";
import BannerBottom from "@/components/modules/BannerBottom";
import ProductDiscount from "../modules/ProductDiscount";
import SendEmail from "../modules/SendEmail";
import SearchModal from "../modules/SearchModal";

function HomePage({data}) {
  return (
    <main className="container m-auto max-w-[1280px] px-2">
      <SearchModal />
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
      <SendEmail />
    </main>
  );
}

export default HomePage;
