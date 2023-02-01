import { Logo } from "../Logo"
import "./style.scss"
import searchIcon from "../../assets/svgs/searchIcon.svg"
import notifyIcon from "../../assets/svgs/notifyIcon.svg"
import { Profile } from "../Profile"
export const Header = () =>{
    return (
       <>
           <header className="header-nav">
           <div>
            <Logo />
           </div>
            <section className="search-nav">
                <input type="Search" placeholder="Search for anything" />
               <span>
               <img src={searchIcon} alt="" />
               </span>
            </section>
            <section className="right-top-bar">
                <p className="doc-text">Docs</p>
                <div className="img-container">
                    <img src={notifyIcon} alt="" />
                </div>
                <Profile />
            </section>
           </header>

       </>
    )
}