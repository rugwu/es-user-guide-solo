import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <p>ES Loyalty&#8482; </p>
    ),
    Svg: require('@site/static/img/es-loyalty-white-logo.svg').default,
    description: (
      <>
        Comprehensive loyalty platform that empowers brands to create omni-channel programs with personalized experiences, advanced analytics and seamless integrations.
      </>
    ),
  },
  {
    title: (
      <p>ES Loyalty<i>Boost</i>&#8482;</p>
    ),
    Svg: require('@site/static/img/es-loyalty-boost-white-logo.svg').default,
    description: (
      <>
        AI-driven offer optimization designed to drive deeper engagement and stronger performance for your loyalty program.
      </>
    ),
  },
  {
     title: (
      <p>ES Engage&#8482;</p>
    ),
    Svg: require('@site/static/img/es-engage-white-logo.svg').default,
    description: (
      <>
        Automated Personalized Offers that Maximize Conversion. Increase conversions and spend, and boosts customer engagement.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
