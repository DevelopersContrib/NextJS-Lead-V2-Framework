import Container from "@/components/Container";
import FeaturedDomain from "@/components/FeaturedDomain";
import Footer from "@/components/Footer";
import HeaderWidget from "@/components/HeaderWidget";
import StaticCTAButton from "@/components/LatestCTA";
import Logo from "@/components/logo";
import RelatedDomains from "@/components/RelatedDomains";
import { getData, getDomain, getRelatedDomains, getScript, getUserWidget, getBlogData } from "@/lib/data";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
// import Notification from "@/components/notification/Notification";
import BlogList from "@/modules/blog/BlogList";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const c = await getData();
  const domain = await getDomain();
  const users = await getUserWidget();
  const related_domains = await getRelatedDomains();
  const blogData = await getBlogData();
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

  // Set to true to show the hero H1, false to hide
  const showHeroTitle = false;

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
        
        {/* Top Banner */}
        <section className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-py-4 tw-text-white tw-text-sm tw-font-bold tw-relative">
          <div className="tw-container tw-mx-auto tw-text-center">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-4">
              <div className="tw-flex tw-items-center tw-gap-2">
                <i className="fas fa-rocket tw-text-yellow-300"></i>
                <span>🚀 Premium Domain Opportunity - Join the Elite Network</span>
              </div>
              <a
                href={link}
                target="_blank"
                className="tw-bg-white tw-text-blue-600 tw-px-4 tw-py-2 tw-rounded-full tw-font-semibold hover:tw-bg-gray-100 tw-transition-all tw-duration-300 tw-shadow-lg"
              >
                Explore Now →
              </a>
            </div>
          </div>
          <div className="tw-hidden lg:tw-block tw-absolute tw-right-4 tw-top-0 tw-bottom-0 tw-flex tw-items-center">
            <a
              href={ctb_link}
              target="_blank"
              className="tw-bg-yellow-400 hover:tw-bg-yellow-300 tw-text-black tw-px-3 tw-py-2 tw-rounded-full tw-font-semibold tw-text-sm tw-flex tw-items-center tw-gap-2 tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-scale-105"
            >
              <Image
                src="https://cdn.vnoc.com/logos/badge-contrib-3.png"
                width="20"
                height="20"
                alt="CTB Badge"
              />
              Claim CTB
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section
          style={{
            minHeight: "100vh",
          }}
          className="tw-relative tw-text-white tw-bg-center tw-flex tw-w-full tw-items-center"
        >
          <div className="tw-bg-black tw-bg-opacity-60 tw-absolute tw-inset-0"></div>
          <div className="tw-container tw-mx-auto tw-relative tw-px-4">
            <div className="tw-text-center tw-mb-12">
              <Logo
                domain={capitalizeDomain}
                logo={c.data.logo}
              />
              {showHeroTitle && (
                <h1 className="tw-font-bold tw-capitalize tw-mb-6 tw-text-3xl md:tw-text-5xl lg:tw-text-6xl tw-leading-tight">
                  {title || `Welcome to ${capitalizeDomain}`}
                </h1>
              )}
              <p className="tw-text-lg md:tw-text-xl tw-mb-8 tw-text-gray-200 tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                {description || `Join the exclusive network of entrepreneurs, developers, and innovators leveraging premium domains to build the future of Web3 and blockchain technology.`}
              </p>

              {/* CTA Buttons */}
              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-items-center">
                <a
                  href={ctb_link}
                  target="_blank"
                  className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 hover:tw-from-blue-700 hover:tw-to-purple-700 tw-text-white tw-px-8 tw-py-4 tw-rounded-full tw-font-bold tw-text-lg tw-shadow-2xl tw-transition-all tw-duration-300 hover:tw-scale-105 tw-flex tw-items-center tw-gap-2"
                >
                  <i className="fas fa-rocket"></i>
                  Start Your Journey
                </a>
                <a
                  href="https://vnoc.com"
                  target="_blank"
                  className="tw-bg-transparent tw-border-2 tw-border-white hover:tw-bg-white hover:tw-text-black tw-text-white tw-px-8 tw-py-4 tw-rounded-full tw-font-bold tw-text-lg tw-transition-all tw-duration-300 tw-flex tw-items-center tw-gap-2"
                >
                  <i className="fas fa-info-circle"></i>
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="tw-flex tw-justify-center">
              <div className="tw-w-full tw-max-w-2xl">
                <Container domain={capitalizeDomain} />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="tw-py-24 tw-bg-gradient-to-b tw-from-gray-900 tw-to-black">
          <div className="tw-container tw-mx-auto tw-px-4">
            <div className="tw-text-center tw-mb-16">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-mb-6">
                Why Choose <span className="tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400">{capitalizeDomain}</span>?
              </h2>
              <p className="tw-text-xl tw-text-gray-300 tw-max-w-3xl tw-mx-auto">
                Join a curated community of forward-thinking individuals building the next generation of digital assets and blockchain solutions.
              </p>
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto">
              {[
                {
                  icon: "fas fa-crown",
                  color: "tw-text-yellow-400",
                  title: "Premium Domain Access",
                  description: "Exclusive access to high-value domains that can accelerate your project's success and credibility.",
                  features: ["Domain Valuation", "Premium Listings", "Exclusive Access"]
                },
                {
                  icon: "fas fa-users",
                  color: "tw-text-blue-400",
                  title: "Elite Community",
                  description: "Connect with successful entrepreneurs, developers, and investors in the blockchain space.",
                  features: ["Networking Events", "Expert Mentorship", "Collaboration Opportunities"]
                },
                {
                  icon: "fas fa-chart-line",
                  color: "tw-text-green-400",
                  title: "Revenue Generation",
                  description: "Multiple income streams through domain trading, development, and strategic partnerships.",
                  features: ["Trading Profits", "Development Revenue", "Partnership Income"]
                },
                {
                  icon: "fas fa-shield-alt",
                  color: "tw-text-purple-400",
                  title: "Risk Management",
                  description: "Professional guidance and tools to minimize risks and maximize returns on your investments.",
                  features: ["Market Analysis", "Risk Assessment", "Portfolio Diversification"]
                },
                {
                  icon: "fas fa-rocket",
                  color: "tw-text-red-400",
                  title: "Fast-Track Growth",
                  description: "Accelerate your project's development with proven strategies and resources.",
                  features: ["Growth Strategies", "Resource Access", "Speed Optimization"]
                },
                {
                  icon: "fas fa-globe",
                  color: "tw-text-indigo-400",
                  title: "Global Reach",
                  description: "Access international markets and opportunities through our global network.",
                  features: ["Global Network", "Market Access", "Cultural Insights"]
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="tw-bg-gray-800 hover:tw-bg-gray-700 tw-rounded-2xl tw-p-8 tw-h-full tw-flex tw-flex-col tw-justify-between tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-2xl tw-border tw-border-gray-700 hover:tw-border-gray-600"
                >
                  <div>
                    <div className="tw-flex tw-items-center tw-mb-4">
                      <div className={`${item.icon} tw-text-3xl ${item.color} tw-mr-3`}></div>
                      <h3 className="tw-font-bold tw-text-xl tw-text-white">{item.title}</h3>
                    </div>
                    <p className="tw-text-gray-300 tw-mb-6 tw-leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="tw-space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="tw-flex tw-items-center tw-text-sm tw-text-gray-400">
                        <i className="fas fa-check tw-text-green-400 tw-mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="tw-py-20 tw-bg-black tw-bg-opacity-80">
          <div className="tw-container tw-mx-auto tw-px-4">
            <div className="tw-text-center tw-mb-16">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="tw-text-xl tw-text-gray-300 tw-max-w-3xl tw-mx-auto">
                Join thousands of successful entrepreneurs and developers who have already transformed their digital presence.
              </p>
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-max-w-6xl tw-mx-auto tw-mb-16">
              {[
                { number: "10,000+", label: "Active Users", color: "tw-text-blue-400" },
                { number: "$50M+", label: "Total Value", color: "tw-text-green-400" },
                { number: "95%", label: "Success Rate", color: "tw-text-yellow-400" },
                { number: "24/7", label: "Support", color: "tw-text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="tw-text-center">
                  <div className={`tw-text-4xl md:tw-text-5xl tw-font-bold ${stat.color} tw-mb-2`}>
                    {stat.number}
                  </div>
                  <div className="tw-text-gray-400 tw-font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto">
              {[
                {
                  name: "Sarah Chen",
                  role: "Blockchain Developer",
                  company: "TechCorp",
                  content: "This platform transformed how I approach domain investments. The community insights are invaluable.",
                  avatar: "https://i.pravatar.cc/150?img=1"
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Entrepreneur",
                  company: "StartupXYZ",
                  content: "Found my perfect domain here and connected with amazing partners. ROI exceeded expectations.",
                  avatar: "https://i.pravatar.cc/150?img=2"
                },
                {
                  name: "Dr. Emily Watson",
                  role: "Investor",
                  company: "Venture Capital",
                  content: "Professional platform with real opportunities. The due diligence tools saved me countless hours.",
                  avatar: "https://i.pravatar.cc/150?img=3"
                }
              ].map((testimonial, index) => (
                <div key={index} className="tw-bg-gray-800 tw-rounded-2xl tw-p-6 tw-border tw-border-gray-700">
                  <div className="tw-flex tw-items-center tw-mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="tw-rounded-full tw-mr-4"
                    />
                    <div>
                      <div className="tw-font-bold tw-text-white">{testimonial.name}</div>
                      <div className="tw-text-sm tw-text-gray-400">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                  <p className="tw-text-gray-300 tw-leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="tw-flex tw-text-yellow-400 tw-mt-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="tw-py-24 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600">
          <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-mb-6">
              Ready to Transform Your Digital Future?
            </h2>
            <p className="tw-text-xl tw-text-blue-100 tw-mb-8 tw-max-w-3xl tw-mx-auto">
              Join the elite network of domain investors and blockchain innovators. Your premium domain opportunity awaits.
            </p>
            
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-items-center tw-mb-8">
              <a
                href={ctb_link}
                target="_blank"
                className="tw-bg-white tw-text-blue-600 hover:tw-bg-gray-100 tw-px-8 tw-py-4 tw-rounded-full tw-font-bold tw-text-lg tw-shadow-2xl tw-transition-all tw-duration-300 hover:tw-scale-105 tw-flex tw-items-center tw-gap-2"
              >
                <i className="fas fa-rocket"></i>
                Get Started Now
              </a>
              <a
                href={link}
                target="_blank"
                className="tw-bg-transparent tw-border-2 tw-border-white hover:tw-bg-white hover:tw-text-blue-600 tw-text-white tw-px-8 tw-py-4 tw-rounded-full tw-font-bold tw-text-lg tw-transition-all tw-duration-300 tw-flex tw-items-center tw-gap-2"
              >
                <i className="fas fa-play"></i>
                Watch Demo
              </a>
            </div>
            
            <div className="tw-text-blue-100 tw-text-sm">
              <i className="fas fa-clock tw-mr-2"></i>
              Limited Time: First 100 members get exclusive access to premium domains
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <ErrorBoundary>
          <BlogList theme="white" initialBlogData={blogData} />
        </ErrorBoundary>

        {/* Related Domains */}
        <div className="tw-w-full tw-mt-10 tw-mb-10">
          <RelatedDomains domains={related_domains} />
        </div>

        <FeaturedDomain domain={capitalizeDomain} />
      </div>
      
      {/* <Notification /> */}
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
