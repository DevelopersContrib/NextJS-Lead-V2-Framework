"use client"
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const FeaturedDomain = ({domain,capitalizedomain}) => {
  return (
    <section className="tw-py-24 tw-bg-[#eff1f4]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lx-12 tw-relative d-none d-lg-block">
            <div className="tw-absolute tw-z-30 tw-h-[480px] tw-w-[450px] tw-right-[90px] tw-top-[-55px] tw-bg-[#f1f1f1] tw-border tw-border-[#ccc] tw-shadow-[0_2px_2px_0_rgba(0,0,0,.1),0_4px_10px_0_rgba(0,0,0,.1)] tw-p-12">
              <h4 className='tw-text-[#595d6e]'>
                Follow, Build, and Help Launch
              </h4>
              <p>
                <span className="tw-text-[#595d6e] tw-font-semibold">Follow {capitalizedomain}</span> and other great ventures on the Contrib platform.
                <br /><br />
                <span className="tw-text-[#595d6e] tw-font-semibold">Build {capitalizedomain}</span> and Help cofound a relevant new Startup, Part-Time.
                <br /><br />
                <span className="tw-text-[#595d6e] tw-font-semibold">Launch {capitalizedomain}</span> and you could be front and center in the process. Launch {capitalizedomain} with us today!
              </p>
              <div className="text-center">
                <a href={`https://contrib.com/brand/details/${domain}`} className="btn btn-primary">Learn about {capitalizedomain}</a>
              </div>
            </div>
          </div>
          <div className="col-xl-12 tw-min-h-[200px] lg:tw-min-h-[350px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="https://applications.net/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/applicationsnet.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://consultants.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/consultants.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://globalventures.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/globalventures.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://photostream.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/photostream.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://referrals.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/referrals.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://venturecamp.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/venturecamp.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://virtualinterns.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/virtualinterns.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://wellnesschallenge.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/wellnesschallenge.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDomain