import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.m-aktas.com';
const SITE_NAME = 'Aktas Gebäudereinigung GmbH';
const DEFAULT_IMAGE = `${SITE_URL}/documents/logo.jpg`;

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Aktas Gebäudereinigung',
  description: 'Professionelle Gebäudereinigung seit 2013. Unterhaltsreinigung, Glasreinigung, Fassadenreinigung, Baureinigung und mehr – bundesweit.',
  url: SITE_URL,
  telephone: '+49-6101-98611-63',
  email: 'info@m-aktas.de',
  foundingDate: '2013',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 70 },
  image: DEFAULT_IMAGE,
  logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrich-Ebert-Str. 47',
    addressLocality: 'Bad Vilbel',
    postalCode: '61118',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.1736576,
    longitude: 8.7373316,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  areaServed: { '@type': 'Country', name: 'Germany' },
  priceRange: '€€',
  sameAs: [],
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'de-DE',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/leistungen`,
  },
};

type BreadcrumbItem = { name: string; url: string };

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  noindex = false,
  ogImage = DEFAULT_IMAGE,
  breadcrumbs,
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} – Professionelle Reinigung in Deutschland`;

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: `${SITE_URL}${b.url}`,
          })),
        ],
      }
    : null;

  const schemas = [
    LOCAL_BUSINESS_SCHEMA,
    WEBSITE_SCHEMA,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow" />
      }
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
