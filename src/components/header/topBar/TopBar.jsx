import {CompanyAddress, CompanyPhone, CompanySchedule, Messengers} from "../../common/CompanyInfo";
import TopBarStyle from "./TopBar.module.css";

const TopBar = () => {
  return (
      <div className={TopBarStyle.background}>
        <div className={TopBarStyle.wrapper}>
          <div className={TopBarStyle.companyInfo}>
            <CompanyPhone/>
            <CompanyAddress/>
            <CompanySchedule/>
          </div>
          <div className={TopBarStyle.messengers}>
            <Messengers/>
          </div>
        </div>
      </div>
  )
}

export default TopBar;