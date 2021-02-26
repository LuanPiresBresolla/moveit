import { ChallengesProvider } from '../context/ChallengesContext';
import { CountdownProvider } from '../context/CountdownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
