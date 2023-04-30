import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Full-Stack Web Developer',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        I create full-stack web applications and Jamstack applications using the best frameworks and best practices around. Hire me to build any application, blog site, or just to implement something small - I can do it all!
      </>
    ),
  },
  {
    title: 'Experience Design Specialist',
    Svg: require('@site/static/img/undraw_experience_design_re_ca7l.svg').default,
    description: (
      <>
       My design process is completely focused on you (the user) and your experience (is my website rad and easy to use?). You can expect a heavy amount of research here with me being a reading nerd.
      </>
    ),
  },
  {
    title: 'Creative Digital Marketer',
    Svg: require('@site/static/img/undraw_freelancer_re_irh4.svg').default,
    description: (
      <>
        I can't ignore my schooling which involved 3.5 years of Business Courses with over a year of work on an economics masters degree. Combine that with my passion for psychology and you have yourself quite the marketer on your hands.
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
        <h3>{title}</h3>
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
