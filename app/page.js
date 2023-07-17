import Image from 'next/image';
import Logo from '@/components/logo';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { getData, getDomain, getTopsites, getScript } from '@/lib/data';
import { FaMapLocationDot, FaUser } from "react-icons/fa6";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const link = 'https://domaindirectory.com/servicepage/?domain=javapoint.com';
  const background = c.data.background_url !== undefined && c.data.background_url !== null ? c.data.background_url : 'https://cdn.vnoc.com/background/domains1.jpg';
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const html = await getScript("https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" + domain)

  const capitalizeDomain = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase()

  return (
    <>
      <section className="tw-bg-[#121212] tw-py-6 tw-text-white tw-text-sm tw-font-bold tw-relative">
        <div className="container text-center">
          We have interesting opportunities for work, sponsors and partnerships.
          <a href={link} target="_blank" className="ms-2 tw-py-[3px!important] tw-text-blue-600 tw-no-underline">Inquire now</a>
        </div>
        <div className="d-none d-lg-block d-sm-none tw-absolute tw-right-[0.5%] tw-top-[5%]">
          <a href="https://www.contrib.com/signup/firststep?domain=mrhog.com" target="_blank" className="btn btn-outline-secondary fnt-500 text-white">
            <Image
              src="https://cdn.vnoc.com/logos/badge-contrib-3.png"
              width="48"
              height="48"
              className="me-1"
              alt=''
            />
            Claim Your CTB Now!
          </a>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url('${background}')` }}
        className="tw-bg-cover tw-bg-no-repeat tw-relative tw-text-white tw-bg-[50%] tw-py-[150px] tw-flex tw-w-full tw-items-center"
      >
        <div className="tw-bg-[rgba(0,0,0,0.55)] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-absolute"></div>
        <div className="container tw-relative">
          <div className="row tw-mb-8">
            <div className="col-xl-12 tw-text-center">
              <Logo domain={capitalizeDomain} logo={c.data.logo} />
              <h5 className='tw-font-semibold text-capitalize mb-3'>
                {title}
              </h5>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <Container domain={capitalizeDomain} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='tw-py-24'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className='tw-font-medium tw-text-4xl text-center mb-5'>
                {capitalizeDomain} Opportunity
              </h2>
            </div>
            <div className="col-xl-4">
              <div className="card text-bg-light mb-3">
                <div className="card-header">Latest Contributors</div>
                <div className="card-body tw-overflow-y-auto tw-max-h-[300px]">
                  <ul className="list-unstyled">
                    <li>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://www.contrib.com/img/avatar0.jpg"
                            width={40}
                            height={40}
                            alt=""
                            className="tw-object-cover"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                Role Name
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white ">
                                Industry Name
                              </div>
                            </li>
                          </ul>
                          <p className="tw-text-xs mb-0">
                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                            Country
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://www.contrib.com/img/avatar0.jpg"
                            width={40}
                            height={40}
                            alt=""
                            className="tw-object-cover"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                Role Name
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white ">
                                Industry Name
                              </div>
                            </li>
                          </ul>
                          <p className="tw-text-xs mb-0">
                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                            Country
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://www.contrib.com/img/avatar0.jpg"
                            width={40}
                            height={40}
                            alt=""
                            className="tw-object-cover"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                Role Name
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white ">
                                Industry Name
                              </div>
                            </li>
                          </ul>
                          <p className="tw-text-xs mb-0">
                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                            Country
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://www.contrib.com/img/avatar0.jpg"
                            width={40}
                            height={40}
                            alt=""
                            className="tw-object-cover"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                Role Name
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white ">
                                Industry Name
                              </div>
                            </li>
                          </ul>
                          <p className="tw-text-xs mb-0">
                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                            Country
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://www.contrib.com/img/avatar0.jpg"
                            width={40}
                            height={40}
                            alt=""
                            className="tw-object-cover"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                Role Name
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white ">
                                Industry Name
                              </div>
                            </li>
                          </ul>
                          <p className="tw-text-xs mb-0">
                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                            Country
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xl-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://cdn.vnoc.com/icons/icon-50x50-contrib-market2.png"
                        width={50}
                        height={50}
                        alt=""
                        className="tw-object-cover"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>
                        Contrib Marketplace
                      </h5>
                      <p className='small'>
                        Browse Jobs, Ideas and Micro Tasks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://cdn.vnoc.com/icons/icon-50x50-contrib-contribute2.png"
                        width={50}
                        height={50}
                        alt=""
                        className="tw-object-cover"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>
                        Contribute
                      </h5>
                      <p className='small'>
                        Contribute using your skills, services, apps and/or capital.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://cdn.vnoc.com/icons/icon-50x50-contrib-money2.png"
                        width={50}
                        height={50}
                        alt=""
                        className="tw-object-cover"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>
                        Contrib Crypto Marketplace
                      </h5>
                      <p className='small'>
                        Contribute to blockchain projects on premium urls today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 tw-text-xl">
                  We envision people around the world with complementary skills, passion, time and resources coworking online with targeted premium assets just like Freelance.net.
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <marquee className="tw-space-x-2">
                <a title="Hard.org" href="https://hard.org" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Hard.org </a>
                <a title="Contingencyfees.com" href="https://contingencyfees.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Contingencyfees.com </a>
                <a title="Netgrowers.com" href="https://netgrowers.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Netgrowers.com </a>
                <a title="Bocabello.com" href="https://bocabello.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Bocabello.com </a>
                <a title="Channelcards.com" href="https://channelcards.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Channelcards.com </a>
                <a title="Indoorgame.com" href="https://indoorgame.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Indoorgame.com </a>
                <a title="Miamivipclub.com" href="https://miamivipclub.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Miamivipclub.com </a>
                <a title="Fardex.com" href="https://fardex.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Fardex.com </a>
                <a title="Dublinchildcare.com" href="https://dublinchildcare.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Dublinchildcare.com </a>
                <a title="Issuestv.com" href="https://issuestv.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Issuestv.com </a>
                <a title="Vbarge.com" href="https://vbarge.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Vbarge.com </a>
                <a title="Francechannel.com" href="https://francechannel.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Francechannel.com </a>
                <a title="Elimostaert.com" href="https://elimostaert.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Elimostaert.com </a>
                <a title="Businessperk.com" href="https://businessperk.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Businessperk.com </a>
                <a title="Transveg.com" href="https://transveg.com" class="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> Transveg.com </a>
              </marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className='tw-font-medium tw-text-4xl text-center mb-5'>
                {capitalizeDomain} Team
              </h2>
            </div>
            <div className="col-xl-12">
              <p>
                {capitalizeDomain} is a bit different than most startups. We are small, diverse team working remotely and loving what we do. We only cowork with others who also have this same passion.
              </p>
              <p>
                {capitalizeDomain} seeks to contract and hire the best people and then trust them: it&apos;s the thinking behind the work at their own time policy.
              </p>
              <p>
                The {capitalizeDomain} team loves building things and focus on being the most productive individual, not the amount of time spent in the office. We put a lot of effort into making {capitalizeDomain} a fun place to work for people who like getting things done. So if you&apos;re game with this then enter your email address and be a part of the global team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer domain={capitalizeDomain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </>
  )
}
