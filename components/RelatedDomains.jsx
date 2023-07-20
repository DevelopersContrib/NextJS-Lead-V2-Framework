const RelatedDomains = ({ domains }) => {
    return(
        <>
        <marquee className="tw-space-x-2">
            {domains.data.map((domain) => (
                <a key={domain.domain_name} title={domain.domain_name} href={`https://${domain.domain_name}`} className="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" target="_blank"> {domain.domain_name} </a>
            ))}
        </marquee>
        </>
    )
}
export default RelatedDomains;