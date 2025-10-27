import Image from 'next/image'

export default function Logo({ domain, logo }) {
  if (logo != null && logo != '') {
    return (
      <Image
        src={logo}
        width={400}
        height={100}
        alt={domain}
        className='d-inline-flex img-fluid mb-3'
      />
    )
  } else {
    return (
      <h1 className="tw-font-bold tw-capitalize tw-mb-6 tw-text-3xl md:tw-text-5xl lg:tw-text-6xl tw-leading-tight">{domain}</h1>
    )
  }
}
