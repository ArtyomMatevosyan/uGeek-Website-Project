import "../styles/globals.css";
import NextNprogress from 'nextjs-progressbar';

const Ugeek = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress color="black" delay={300} />
      <Component {...pageProps} />
    </>
  )
}

export default Ugeek;
