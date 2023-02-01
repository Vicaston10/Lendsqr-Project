import { busNav, custNav, settNav } from "../../utils/navData"
import "./styles.scss"
import { useLocation } from "react-router-dom"

export const Sidebar = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
    const users = "users"
    const myUser = users.includes(location.pathname);
    console.log(myUser)

    return (
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <div>
                    <p className="header-nav-title">
                        <img src="/assets/svgs/office.svg" alt="" />
                        <span>Switch Organization</span>
                        <img src="/assets/svgs/downArrow.svg" alt="" />
                    </p>
                </div>
                <div>
                    <p className="nav-item-link">
                        <img src="/assets/svgs/home.svg" alt="home svgs" />
                        <span>Dashboard</span>
                    </p>
                </div>
                <div>
                    <p className="header-nav-title">Customers</p>
                    <ul className="nav-list">
                        {
                            custNav.map((navItem) => (
                                <li className={`nav-item-link ${currentUrl === navItem.link ? "active-url" : ""}`}>
                                    <img src={navItem.img} alt="" />

                                    <span>{navItem.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <p className="header-nav-title">Business</p>
                    <ul className="nav-list">
                        {
                            busNav.map((navItem) => (
                                <li className="nav-item-link">
                                    <img src={navItem.img} alt="" />
                                    <span>{navItem.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <p className="header-nav-title">Settings</p>
                    <ul className="nav-list">
                        {
                            settNav.map((navItem) => (
                                <li className="nav-item-link">
                                    <img src={navItem.img} alt="" />
                                    <span>{navItem.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}