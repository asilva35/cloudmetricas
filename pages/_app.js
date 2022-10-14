import '../styles/grid.css';
import '../styles/motion.styles.css';
import '../styles/globals.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: true,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default MyApp;
