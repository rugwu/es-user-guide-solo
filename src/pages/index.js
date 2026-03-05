// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">Get started with {siteConfig.tagline}</p>
//         {/* <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div> */}
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={ `${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }






































import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function Icon({ name, className }) {
  // Small, consistent inline SVG icons (no external assets).
  switch (name) {
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M14.5 3.2c3.3.3 5.9 2.9 6.3 6.3.2 1.9-.2 3.9-1.2 5.7l-3.1 5.6-2.6-2.6-2.9 1a2 2 0 0 1-2.1-.5l-3-3a2 2 0 0 1-.5-2.1l1-2.9-2.6-2.6 5.6-3.1c1.8-1 3.8-1.4 5.7-1.2Z"
            fill="currentColor"
            opacity=".14"
          />
          <path
            d="M10 14l4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15.7 8.3a1.5 1.5 0 1 1-2.1 2.1 1.5 1.5 0 0 1 2.1-2.1Z"
            fill="currentColor"
          />
          <path
            d="M6.3 17.7c-1.6 1.6-2 3.7-2 3.7s2.1-.4 3.7-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M6 4h10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z"
            fill="currentColor"
            opacity=".14"
          />
          <path
            d="M6 4h10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 8h8M8 12h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M9 18 3 12l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M15 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M10.5 20 13.5 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity=".9"
          />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 3 3 8l9 5 9-5-9-5Z"
            fill="currentColor"
            opacity=".14"
          />
          <path
            d="M3 12l9 5 9-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M3 8l9 5 9-5-9-5-9 5Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M3 16l9 5 9-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
            opacity=".9"
          />
        </svg>
      );
    default:
      return null;
  }
}

function HeroArt() {
  // Decorative SVG (kept subtle; uses currentColor via CSS vars).
  return (
    <svg
      className={styles.heroArt}
      viewBox="0 0 520 340"
      role="img"
      aria-label="Decorative illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--ifm-color-primary)" stopOpacity="0.95" />
          <stop offset="1" stopColor="var(--ifm-color-primary-lightest)" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--ifm-color-primary)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--ifm-color-primary)" stopOpacity="0.02" />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect x="0" y="0" width="520" height="340" fill="transparent" />
      <circle cx="390" cy="90" r="90" fill="url(#g2)" filter="url(#blur)" />
      <circle cx="440" cy="230" r="90" fill="url(#g2)" filter="url(#blur)" />
      <circle cx="310" cy="210" r="120" fill="url(#g2)" filter="url(#blur)" />

      <g transform="translate(255 50)">
        <path
          d="M40 20c60-40 160-10 170 70 10 90-70 135-135 135-90 0-145-90-100-160 15-25 35-35 65-45Z"
          fill="url(#g1)"
          opacity="0.95"
        />
        <g opacity="0.95">
          <rect x="55" y="78" width="160" height="110" rx="14" fill="var(--ifm-background-color)" />
          <rect x="55" y="78" width="160" height="110" rx="14" fill="none" stroke="rgba(0,0,0,.08)" />
          <path
            d="M78 112h80M78 138h115M78 164h60"
            stroke="var(--ifm-font-color-base)"
            strokeOpacity="0.35"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="195" cy="115" r="10" fill="var(--ifm-color-primary)" opacity="0.9" />
        </g>
      </g>
    </svg>
  );
}

function Card({ icon, title, description, to }) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardTop}>
        <span className={styles.cardIconWrap}>
          <Icon name={icon} className={styles.cardIcon} />
        </span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardCta} aria-hidden="true">
        Learn more →
      </span>
    </Link>
  );
}

function LinkList({ title, items }) {
  return (
    <div className={styles.linkList}>
      <h3 className={styles.linkListTitle}>{title}</h3>
      <ul className={styles.linkListUl}>
        {items.map((it) => {
          const isExternal =
            it.external ?? (typeof it.to === 'string' && /^https?:\/\//.test(it.to));

          return (
            <li key={it.to} className={styles.linkListLi}>
              <Link
                to={it.to}
                className={styles.linkListLink}
                {...(isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : null)}
              >
                <span className={styles.linkText}>
                  {it.label}
                  {isExternal && (
                    <ExternalArrowIcon className={styles.externalIcon} />
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ExternalArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M6 3h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3 6.2 9.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4H4.5A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6A1.5 1.5 0 0 0 12 11.5V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
    </svg>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const primaryCards = [
    {
      icon: 'rocket',
      title: 'Get started',
      description: 'Quick setup, core concepts, and your first successful integration.',
      to: '/docs/getting-started/platform-overview',
    },
    {
      icon: 'layers',
      title: 'Guides',
      description: 'Practical guides for common workflows and best practices.',
      to: '/docs/business-recipes',
    },
    {
      icon: 'code',
      title: 'API reference',
      description: 'Endpoints, schemas, examples, and authentication details.',
      to: '/docs/api',
    },
    {
      icon: 'book',
      title: 'Integrations',
      description: 'Go live with integrations to tools like CataBoom and Dotdigital',
      to: '/docs/integrations',
    },
  ];

  const popular = [
    { label: 'Authentication & API keys', to: '/docs/api/authentication' },
    { label: 'Webhooks', to: '/docs/api/webhooks' },
    { label: 'Rate limits & retries', to: '/docs/api/rate-limits' },
    { label: 'Errors & troubleshooting', to: '/docs/troubleshooting/api-error-codes' },
    { label: 'Releases and changelog', to: '/docs/release-notes' },
  ];

  const resources = [
    { label: 'Architecture overview', to: '/docs/getting-started/architecture-overview' },
    { label: 'Glossary', to: '/docs/glossary' },
    { label: 'Status', to: '/docs/troubleshooting/performance-issues' },
    { label: 'Support', to: 'https://esidevops.atlassian.net/servicedesk/customer/portals', external: true },
    { label: 'Security', to: 'https://www.exchangesolutions.com/security-compliance' , external: true },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline || 'Documentation home'}
    >
      <Head>
        {/* Optional: improve share previews if you have an image */}
        {/* <meta property="og:image" content="/img/og.png" /> */}
      </Head>

      <main>
        <header className={styles.hero}>
          <div className={clsx('container', styles.heroInner)}>
            <div className={styles.heroLeft}>
              <p className={styles.kicker}>Documentation</p>
              <h1 className={styles.heroTitle}>
                Build faster with clear guides and API references
              </h1>
              <p className={styles.heroSubtitle}>
                Everything you need to integrate, test, and ship, organized by task, with
                examples you can work with.
              </p>

              <div className={styles.heroSearch}>
                <SearchBar />
              </div>

              <div className={styles.heroButtons}>
                <Link className={styles.primaryButton} to="/docs/getting-started/">
                  Start here
                </Link>
                <Link className={styles.secondaryButton} to="/docs/api/">
                  Explore APIs
                </Link>
              </div>

              {/* <div className={styles.heroMeta}>
                <span className={styles.metaPill}>Quickstart</span>
                <span className={styles.metaDot} />
                <span className={styles.metaPill}>Guides</span>
                <span className={styles.metaDot} />
                <span className={styles.metaPill}>Reference</span>
              </div> */}
            </div>

            <div className={styles.heroRight}>
              <HeroArt />
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Browse documentation</h2>
              <p className={styles.sectionSubtitle}>
                Jump into the area you need, then drill down from there.
              </p>
            </div>

            <div className={styles.grid}>
              {primaryCards.map((c) => (
                <Card key={c.to} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.split}>
              <LinkList title="Popular" items={popular} />
              <LinkList title="Resources" items={resources} />
              <div className={styles.ctaPanel}>
                <h3 className={styles.ctaTitle}>Need a working example?</h3>
                <p className={styles.ctaText}>
                  Start from a runnable template and tailor it to your integration.
                </p>
                <div className={styles.ctaButtons}>
                  {/* <Link className={styles.primaryButtonSmall} to="/docs/sdks">
                    View SDKs
                  </Link> */}
                  <Link className={styles.tertiaryLink} to="/docs/business-recipes">
                    Browse guides →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.section}>
          <div className="container">
            <div className={styles.bottomCta}>
              <div>
                <h2 className={styles.bottomCtaTitle}>Ready to integrate?</h2>
                <p className={styles.bottomCtaText}>
                  Follow the quickstart and verify your first request in minutes.
                </p>
              </div>
              <div className={styles.bottomCtaActions}>
                <Link className={styles.primaryButton} to="/docs/intro">
                  Go to quickstart
                </Link>
                <Link className={styles.secondaryButton} to="/docs/guides/troubleshooting">
                  Troubleshooting
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}