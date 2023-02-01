import { useState } from "react"
import { detailProp, } from "../../../types/userType"
import "./style.scss"


export const UserProfile = ({ detail }: detailProp) => {


    const nav = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"]

    const [activeTab, setActiveTab] = useState("General Details")

    const changeTab = (nav: string) => {
        setActiveTab(nav)
    }

    return (
        <div className="profile-container">
            <div className="profile-top-wrapper">
                <div className="user-info-data">
                    <div className="my-profile-img">
                        <img src={detail?.profile?.avatar} alt="" />
                    </div>
                    <div className="user-name">
                        <h2>{detail?.profile?.firstName} {detail?.profile?.lastName}</h2>
                        <span>{detail?.accountNumber}</span>
                    </div>
                </div>
                <div className="user-level">
                    <p>User's Tier</p>
                    <div className="ratings">
                        <img src="/assets/svgs/starfull.svg" alt="" />
                        <img src="/assets/svgs/halfstar.svg" alt="" />
                        <img src="/assets/svgs/halfstar.svg" alt="" />
                    </div>
                </div>
                <div className="user-account-details">
                    <p>{detail?.profile?.currency === "NGN" ? "₦" : "$"}  {detail?.accountBalance}</p>
                    <span>{detail?.accountNumber}/Providus Bank </span>
                </div>
            </div>
            <div className="nav-containers">
                {
                    nav.map((navItem, i) => (
                        <span key={i} onClick={() => changeTab(navItem)} className={activeTab === navItem ? "activeTab" : ""} >{navItem}</span>
                    ))
                }
            </div>
        </div>
    )
}