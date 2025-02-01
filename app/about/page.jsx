import Script from "next/script"
import { getDomain, getData} from '../../lib/data';
import HeaderWidget from "@/components/HeaderWidget";
import Image from "next/image";
import Link from "next/link";
import { Info, Target, Users } from 'lucide-react';
import { HeaderNav } from "@/components/HeaderNav";
import Footer from "@/components/Footer";


export default async function AboutPage() {
  const c = await getData();
  const domain = getDomain();
  const link = 'https://domaindirectory.com/servicepage/?domain=' + domain;
  const ctb_link = 'https://www.contrib.com/signup/firststep?domain=' + domain;
  const background = c.data.background_url !== undefined && c.data.background_url !== null ? c.data.background_url : 'https://cdn.vnoc.com/background/domains1.jpg';
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const capitalizeDomain = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase()


  return (
    <div>
      
      <div style={{ 
        backgroundImage: `url('${background}')`          
      }} 
      className="tw-bg-black tw-bg-opacity-50 relative tw-w-full tw-bg-cover tw-bg-no-repeat tw-relative">

        <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId} />
        <section className="tw-bg-gray-800 tw-py-6 tw-text-white tw-text-sm tw-font-bold tw-relative">
          <div className="tw-container tw-mx-auto tw-text-center">
            We have interesting opportunities for work, sponsors, and partnerships.
            <a href={link} target="_blank" className="tw-ml-2 tw-py-1 tw-text-blue-500 hover:tw-text-blue-400 tw-transition tw-duration-300">Inquire now</a>
          </div>
          <div className="tw-hidden lg:tw-block tw-absolute tw-right-2 tw-top-5">
            <a href={ctb_link} target="_blank" className="tw-btn tw-btn-outline-secondary tw-font-medium tw-text-white tw-flex tw-items-center">
              <Image
                src="https://cdn.vnoc.com/logos/badge-contrib-3.png"
                width="38"
                height="38"
                className="tw-mr-2"
                alt='Claim Your CTB'
              />
              Claim Your CTB Now!
            </a>
          </div>
        </section>
        <HeaderNav domain={capitalizeDomain} logo={c.data.logo} />
        <section className="tw-py-12 tw-bg-opacity-50 tw-text-gray-800">
          <div className="tw-container tw-mx-auto tw-text-center tw-px-4">
            <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md tw-p-8 tw-mb-8">
              <h2 className="tw-text-3xl tw-font-bold tw-mb-4">
                <Info className="tw-inline-block tw-mr-2" />About {capitalizeDomain}
              </h2>
              <p className="tw-text-lg tw-mb-8">
                Welcome to {title}, where we are committed to delivering excellence and innovation in everything we do. Our mission is to provide top-notch services and solutions that empower our clients and partners to achieve their goals.
              </p>
            </div>
            <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md tw-p-8 tw-mb-8">
              <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">
                <Target className="tw-inline-block tw-mr-2" />Our Mission
              </h3>
              <p className="tw-text-lg tw-mb-8">
                At {title}, our mission is to drive progress and make a positive impact in the industry. We strive to create value through our expertise, dedication, and passion for what we do.
              </p>
            </div>
            <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md tw-p-8">
              <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">
                <Users className="tw-inline-block tw-mr-2" />Meet Our Team
              </h3>
              <p className="tw-text-lg tw-mb-8">
                Our team is composed of talented and driven individuals who are passionate about making a difference. We believe in collaboration, innovation, and excellence, and we are excited to work with you.
              </p>
            </div>
          </div>
        </section>

        <section className="tw-py-24 tw-bg-opacity-50">
        <div className="tw-container tw-mx-auto">
          <div className="tw-text-center tw-mb-12">
            <h2 className='tw-font-medium tw-text-4xl tw-text-gray-800'>
              Meet the {capitalizeDomain} Team
            </h2>
            <p className="tw-text-lg tw-text-gray-600">A diverse group of professionals dedicated to excellence</p>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center tw-mb-8">
            <div className="tw-flex tw-space-x-[-10px]">
              {[1, 2, 3, 4].map((id) => (
                <Image
                  key={id}
                  src={`https://picsum.photos/seed/${id}/100`} // Dynamic image from Lorem Picsum
                  alt={`Team Member ${id}`}
                  className="tw-w-16 tw-h-16 tw-object-cover tw-rounded-full tw-shadow-lg"
                  width={60}
                  height={60}
                />
              ))}
            </div>
          </div>
          <div className="tw-text-center tw-mx-auto tw-max-w-2xl tw-bg-white tw-rounded-lg tw-shadow-md tw-p-8 tw-mb-8">
            <p className="tw-text-xl tw-text-gray-700 tw-mb-4">
              📬 Dear Future Team Member,
            </p>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-4">
              We are thrilled to invite you to join our vibrant team at {capitalizeDomain}. Our team is a melting pot of creativity, innovation, and passion, and we believe that your unique skills and talents would be a perfect addition. 🌟
            </p>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-4">
              At {capitalizeDomain}, we work together to achieve extraordinary results, and we have a lot of fun along the way. Whether you&apos;re a tech wizard, a creative genius, or a strategic thinker, there&apos;s a place for you here. 🚀
            </p>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-4">
              Ready to make an impact? Click the button below to start your journey with us. We can&apos;t wait to see what we can achieve together! 🤝
            </p>
            <button className="tw-bg-red-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-font-semibold tw-transition-all tw-duration-300 tw-ease-in-out tw-transform hover:tw-scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </section>     
      </div>
      <Footer capitalizedomain={title} domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </div>
  );
}