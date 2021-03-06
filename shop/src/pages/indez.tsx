import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import BrandGridBlock from "@containers/brand-grid-block";
import CategoryBlock from "@containers/category-block";
import { getLayout } from "@components/layout/layout";
import BannerWithProducts from "@containers/banner-with-products";
import BannerBlock from "@containers/banner-block";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Instagram from "@components/common/instagram";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import Subscription from "@components/common/subscription";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import { ROUTES } from "@lib/routes";
import {useBannerQuery} from "@framework/banner/banner.query";

export { getStaticProps } from "@framework/ssr/pages";


export default function Home() {
  const { data: banners } = useBannerQuery();

  return (
    <>
      <BannerBlock banners={banners?.homeThreeMasonryBanner} />
      <Container>
        <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"}/>
      </Container>
      <BannerSliderBlock banners={banners?.promotionBanner} />
      <Container>
      	<CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />
      	<ProductsFeatured sectionHeading="text-featured-products" />
      	<BannerCard
      		key={`banner--key${banners?.homeThreeBanner?.[0].id}`}
      		banner={banners?.homeThreeBanner?.[0]}
      		href={`${ROUTES.COLLECTIONS}/${banners?.homeThreeBanner?.[0].slug}`}
      		className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      	/>
      	<BrandGridBlock sectionHeading="text-top-brands" />
      	<BannerCard
      		key={`banner--key${banners?.homeThreeBanner?.[1].id}`}
      		banner={banners?.homeThreeBanner?.[1]}
      		href={`${ROUTES.COLLECTIONS}/${banners?.homeThreeBanner?.[1].slug}`}
      		className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      	/>
      	<BannerWithProducts
      		sectionHeading="text-on-selling-products"
      		categorySlug="/search"
          banner={banners?.homeThreeProductsBanner}
      	/>
      	<ExclusiveBlock />
      	<NewArrivalsProductFeed />
      	<DownloadApps />
      	<Support />
      	<Instagram />
      	<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;