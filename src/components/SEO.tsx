import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  // SEO content specifically optimized for Bing search engine
  const title = "Exódus® Web3 Wallet | Exódus® Browser Exténsion";
  const description = "Secure your digital assets with Exódus Web3 Wallet. The most secure, user-friendly cryptocurrency wallet for managing your Web3 assets across multiple blockchains.";
  const keywords = "Exodus web3 wallet, cryptocurrency wallet, web3 extension, blockchain wallet, secure crypto wallet, digital asset management, DApp browser, multi-chain wallet";
  const canonicalUrl = "https://exodus-web3-wallet.com";
  
  // Structured data for rich snippets in search results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Exódus Web3 Wallet",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Windows, macOS, Linux, Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "description": "Secure, user-friendly Web3 wallet for managing cryptocurrency assets across multiple blockchains."
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${canonicalUrl}/twitter-image.jpg`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Bing Webmaster Tools Verification - This would be replaced with your actual verification code */}
      <meta name="msvalidate.01" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Exódus Web3 Wallet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0284c7" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Hreflang Tags for International SEO */}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}/es`} />
      <link rel="alternate" hrefLang="fr" href={`${canonicalUrl}/fr`} />
      <link rel="alternate" hrefLang="de" href={`${canonicalUrl}/de`} />
      
      {/* Additional Tags for Bing Optimization */}
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
    </Helmet>
  );
};

export default SEO;