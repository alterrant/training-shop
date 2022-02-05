import AboutUsStyle from "./AboutUs.module.css";
import FooterInfo from "./FooterInfo";
import {ReactComponent as SVGAddress} from './../../../assets/SVG/location-marker.svg'
import {ReactComponent as SVGPhone} from './../../../assets/SVG/phone.svg'
import {ReactComponent as SVGClock} from './../../../assets/SVG/clock.svg'
import {ReactComponent as SVGMail} from './../../../assets/SVG/mail.svg'

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
            <div className={AboutUsStyle.SVGWrapper}>
              <SVGAddress/>
              <p>Belarus, Gomel, Lange 17</p>
            </div>
            <div className={AboutUsStyle.SVGWrapper}>
              <SVGPhone/>
              <p>+375 29 100 20 30</p>
            </div>
            <div className={AboutUsStyle.SVGWrapper}>
              <SVGClock/>
              <p>All week 24/7</p>
            </div>
            <div className={AboutUsStyle.SVGWrapper}>
              <SVGMail/>
              <p>info@clevertec.ru</p>
            </div>
          </FooterInfo>
        </ul>
      </div>
  )
}
export default AboutUs;