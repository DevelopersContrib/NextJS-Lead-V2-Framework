import ScriptLoader from '../../components/ScriptLoader'
import HeaderWidget from '../../components/HeaderWidget'
import { getData, getDomain } from '../../lib/data'
import Footer from '../../components/Footer'

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const html = "<script id='referral-script' src='https://www.referrals.com/extension/widget.js?key=356' type='text/javascript'></script>";

  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <ScriptLoader html={html} />
      <Footer domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </>

  )
}

export default page