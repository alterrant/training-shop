import AboutUsStyle from "./AboutUs.module.css";
import FooterInfo from "./FooterInfo";
import {CompanyAddress, CompanyMail, CompanyPhone, CompanySchedule} from "../../common/CompanyInfo";

const AboutUs = () => {
  return (
      <div className={AboutUsStyle.container}>
        <ul className={AboutUsStyle.wrapper}>
          <FooterInfo>
            <h4 className={AboutUsStyle.title}>CATEGORIES</h4>
            <p>Men</p>
            <p>Women</p>
            <p>Accessories</p>
            <p>Beauty</p>
          </FooterInfo>
          <FooterInfo>
            <h4 className={AboutUsStyle.title}>INFORMATION</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blog</p>
            <p>FAQs</p>
          </FooterInfo>
          <FooterInfo>
            <h4 className={AboutUsStyle.title}>USEFUL LINKS</h4>
            <p>Terms & Conditions</p>
            <p>Returns & Exchanges</p>
            <p>Shipping & Delivery</p>
            <p>Privacy Policy</p>
          </FooterInfo>
          <FooterInfo>
            <h4 className={AboutUsStyle.title}>CONTACT US</h4>
            <CompanyAddress/>
            <CompanyPhone/>
            <CompanySchedule/>
            <CompanyMail/>
          </FooterInfo>
        </ul>
      </div>
  )
}
export default AboutUs;