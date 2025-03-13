import Image from "next/image";
import HeaderWidget from "@/components/HeaderWidget";
import BlogSlugPage from "@/modules/blog/slug";
import { getData, getDomain } from "@/lib/data";
import Footer from "@/components/Footer";
const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;
  const domain = getDomain();
  const c = await getData();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const link = "https://domaindirectory.com/servicepage/?domain=" + domain;
  const ctb_link = "https://www.contrib.com/signup/firststep?domain=" + domain;

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <section className="tw-bg-gray-800 tw-py-6 tw-text-white tw-text-sm tw-font-bold tw-relative">
        <div className="tw-container tw-mx-auto tw-text-center">
          We have interesting opportunities for work, sponsors, and partnerships.
          <a
            href={link}
            target="_blank"
            className="tw-ml-2 tw-py-1 tw-text-blue-500 hover:tw-text-blue-400 tw-transition tw-duration-300"
          >
            Inquire now
          </a>
        </div>
        <div className="tw-hidden lg:tw-block tw-absolute tw-right-2 tw-top-5">
          <a
            href={ctb_link}
            target="_blank"
            className="tw-btn tw-btn-outline-secondary tw-font-medium tw-text-white tw-flex tw-items-center"
          >
            <Image
              src="https://cdn.vnoc.com/logos/badge-contrib-3.png"
              width="38"
              height="38"
              className="tw-mr-2"
              alt="Claim Your CTB"
            />
            Claim Your CTB Now!
          </a>
        </div>
      </section>
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-8tw-mb-8">
        <BlogSlugPage id={id} />
      </div>
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
};

export default BlogPost;
