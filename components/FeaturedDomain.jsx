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
    <section className="tw-py-24 tw-bg-opacity-350">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lx-12 tw-relative d-none d-lg-block">
            <div className="tw-absolute tw-z-30 tw-h-[480px] tw-w-[450px] tw-right-[90px] tw-top-[-55px] tw-bg-[#000] tw-border tw-border-[#ccc] tw-shadow-[0_2px_2px_0_rgba(0,0,0,.1),0_4px_10px_0_rgba(0,0,0,.1)] tw-p-12">
              <h4 className='tw-text-[#595d6e] gradient-text'>
                Follow, Build, and Help Launch
              </h4>
              <p className="tw-text-gray-400">
                <span className="tw-text-[#efefef] tw-font-semibold">Follow {capitalizedomain}</span> and other great ventures on the Contrib platform.
                <br /><br />
                <span className="tw-text-[#efefef] tw-font-semibold">Build {capitalizedomain}</span> and Help cofound a relevant new Startup, Part-Time.
                <br /><br />
                <span className="tw-text-[#efefef] tw-font-semibold">Launch {capitalizedomain}</span> and you could be front and center in the process. Launch {capitalizedomain} with us today!
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
                <a href="https://referrals.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-referrals.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="referrals.com"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://vnoc.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-vnoc.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="vnoc.com"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://globalventures.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-globalventures.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="globalventures.com"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://contrib.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-contrib.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Contrib"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://realtydao.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-realtydao.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Realtydao.com"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://handyman.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-handyman.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Handyman"
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://agentdao.com" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/screenshots/screen-agentdao.com"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Agentdao.com"
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