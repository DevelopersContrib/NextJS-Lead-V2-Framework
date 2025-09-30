const RelatedDomains = ({ domains }) => {
    // Handle different data structures safely
    const domainList = domains?.data || domains || [];
    
    if (!Array.isArray(domainList) || domainList.length === 0) {
        return null;
    }
    
    return(
        <>
        <marquee className="tw-space-x-2">
            {domainList.map((domain, index) => (
                <a 
                    key={domain.domain_name || domain || index} 
                    title={domain.domain_name || domain} 
                    href={`https://${domain.domain_name || domain}`} 
                    className="tw-sm tw-rounded-md p-2 tw-bg-black tw-text-white tw-no-underline tw-inline-flex" 
                    target="_blank"
                > 
                    {domain.domain_name || domain} 
                </a>
            ))}
        </marquee>
        </>
    )
}
export default RelatedDomains;