import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';
import { useAgile } from '@agile-ts/react';
import core from '../../../../core';
import StatBadge from './components/StatBadge';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const StatsView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  const { windowHeight } = useWindowSize();
  const npmDownloads = useAgile(core.stats.NPM_DOWNLOADS);
  const githubStars = useAgile(core.stats.GITHUB_STARS);
  const githubForks = useAgile(core.stats.GITHUB_FORKS);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <div className={styles.Tagline}>Always ready to help.</div>
          <Spacer height={10} />
          <div className={styles.Title}>I Love open source</div>
          <Spacer height={20} />
        </div>
        <Spacer height={windowHeight > 768 ? 60 : 20} />
        <div className={styles.BadgesContainer}>
          <StatBadge
            icon={'star'}
            number={1255}
            text={'Total Contributions'}
            to={`${siteConfig.customFields.githubUrl}`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'star'}
            number={75}
            text={'Pull Requests in last 365 days'}
            to={`${siteConfig.customFields.githubUrl}`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'star'}
            number={350}
            text={'Problems solved'}
            to={`https://auth.geeksforgeeks.org/user/kdsinghcoder/profile`}
            className={styles.Badge}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsView;
