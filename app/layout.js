import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const c = await getData();
  const domain = c.data.domainName;

  const title = !c.data.title?.trim()
    ? `Welcome to ${domain}`
    : c.data.title;

  const description = !c.data.description?.trim()
    ? `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`
    : c.data.description;

  const keywords = !c.data.keywords?.trim()
    ? ['website']
    : c.data.keywords.split(',');

  const author = !c.data.author?.trim()
    ? 'contrib'
    : c.data.author;

  const ogImageUrl = `https://${domain}/images/og-image.jpg`;
  const twitterImageUrl = `https://${domain}/images/twitter-image.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
      images: [ogImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImageUrl],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
