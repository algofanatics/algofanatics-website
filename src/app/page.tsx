import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
// import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
// import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
// import { FaCheck } from "react-icons/fa/index.js";

const Home = () => {
  const homepage = getListPage("_index.md");
  // const testimonial = getListPage("sections/testimonial.md");
  // const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-16 text-center lg:col-7">
              <h1
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <a className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </a>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
