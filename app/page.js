import Image from "next/image";
import Logo from "@/components/logo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import UserWidget from "@/components/UserWidget";
import FeaturedDomain from "@/components/FeaturedDomain";
import ScriptLoader from "@/components/ScriptLoader";
import HeaderWidget from "@/components/HeaderWidget";
import RelatedDomains from "@/components/RelatedDomains";
import { getData, getDomain, getUserWidget, getScript, getRelatedDomains } from "@/lib/data";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StaticCTAButton from "@/components/LatestCTA";
import FomoPopup from "@/components/TokenSalePopup";
import BlogList from "@/modules/blog/BlogList";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const users = await getUserWidget();
  const related_domains = await getRelatedDomains();
  const link = "https://domaindirectory.com/servicepage/?domain=" + domain;
  const ctb_link = "https://www.contrib.com/signup/firststep?domain=" + domain;
  const background =
    c.data.background_url !== undefined && c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/domains1.jpg";
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );
  const service =
    "<script type='text/javascript' src='https://tools.contrib.com/eservice?d=" +
    domain +
    "&ver=2'></script>";

  const capitalizeDomain = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase();

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${background}')`,
        }}
        className="tw-bg-black tw-bg-opacity-50 relative tw-w-full tw-bg-cover tw-bg-no-repeat tw-relative"
      >
        <HeaderWidget
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
        <section
          style={{
            height: "100vh",
          }}
          className="tw-relative tw-text-white tw-bg-center tw-flex tw-w-full tw-items-center"
        >
          <div className="tw-bg-black tw-bg-opacity-50 tw-absolute tw-inset-0"></div>
          <div className="tw-container tw-mx-auto tw-relative">
            <div className="tw-mb-8 tw-text-center">
              <Logo
                domain={capitalizeDomain}
                logo={c.data.logo}
              />
              <h5 className="tw-font-semibold tw-capitalize tw-mb-3 tw-text-lg">{title}</h5>
            </div>
            <div className="tw-flex tw-justify-center">
              <div className="tw-w-full tw-max-w-xl">
                <Container domain={capitalizeDomain} />
              </div>
            </div>
          </div>
        </section>

        <section className="tw-py-24 tw-bg-black tw-bg-opacity-50">
          <div className="tw-container tw-mx-auto tw-items-center">
            <div className="tw-text-center tw-mb-8">
              <h2 className="tw-text-4xl sm:tw-text-4xl tw-font-extrabold gradient-text">
                {capitalizeDomain} Opportunity
              </h2>
            </div>

            <div className="tw-flex tw-flex-wrap tw-justify-center tw-text-white tw-items-center">
              <div className="tw-w-full lg:tw-w-2/3">
                <div className="tw-flex tw-flex-wrap tw-justify-center">
                  {[
                    {
                      icon: "fas fa-briefcase",
                      color: "tw-text-blue-500",
                      title: "Contrib Marketplace",
                      description: "Browse Crypto Tasks and Earn Crypto.",
                    },
                    {
                      icon: "fas fa-hands-helping",
                      color: "tw-text-green-500",
                      title: "Contribute",
                      description: "Contribute using your skills, services, apps and/or capital.",
                    },
                    {
                      icon: "fas fa-coins",
                      color: "tw-text-yellow-500",
                      title: "Crypto Marketplace",
                      description: "Contribute to blockchain projects on premium urls today.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/3 tw-mb-6 tw-px-4"
                    >
                      <div className="tw-bg-gray-900 hover:tw-bg-black tw-rounded-lg tw-shadow-lg tw-p-6 tw-h-full tw-flex tw-flex-col tw-justify-between tw-transition-transform tw-duration-300 hover:tw-scale-105">
                        <div className="tw-flex tw-items-center tw-mb-2">
                          <div className="tw-flex-shrink-0">
                            <i className={`${item.icon} tw-text-2xl ${item.color}`}></i>
                          </div>
                          <div className="tw-flex-grow tw-ml-3">
                            <h5 className="tw-font-semibold tw-text-lg">{item.title}</h5>
                            <p className="tw-text-sm tw-mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="tw-w-full tw-text-xl tw-mt-4 tw-text-center">
                    <p className="tw-text-gray-200 tw-mb-40">
                      Join a global community of passionate individuals with diverse skills and
                      resources, collaborating online with premium assets. Start your journey with{" "}
                      {domain} today and unlock opportunities to earn and contribute to cutting-edge
                      blockchain projects. Register now and be part of the future!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StaticCTAButton />
          <BlogList theme="white" />
          <div className="tw-w-full tw-mt-10 tw-mb-10">
            <RelatedDomains domains={related_domains} />
          </div>
        </section>

        <FeaturedDomain domain={capitalizeDomain} />
      </div>
      <FomoPopup />
      <Footer
        capitalizedomain={capitalizeDomain}
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
