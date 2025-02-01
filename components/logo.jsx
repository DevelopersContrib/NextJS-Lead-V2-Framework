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
      <h1 className="tw-text-6xl sm:text-7xl font-extrabold tw-text-white mb-6 tw-leading-tight">{domain}</h1>
    )
  }
}
