import Head from "next/head";
import PropTypes from "prop-types";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      {/* <link rel='icon' href='/favicon.ico' /> */}
      <script src="https://www.google.com/recaptcha/api.js"></script>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Haze",
  keywords: "digital,agency,AI,intelligence",
  description: "description for Haze Website",
};

// prop types
Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
