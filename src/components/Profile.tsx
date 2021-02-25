import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luanpiresbresolla.png" alt="Avatar" />
      <div>
        <strong>Luan Bresolla</strong>
        <p>
          <img src="icons/level.svg" alt="Icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
