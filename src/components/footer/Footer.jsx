import JoinUs from "./JoinUs/JoinUs";
import AboutUs from "./AboutUs/AboutUs";
import Copyright from "./Copyright/Copyright";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={ footerStyle.footer } data-test-id='footer'>
      <JoinUs/>
      <AboutUs/>
      <Copyright/>
    </footer>
  );
}

export default Footer;