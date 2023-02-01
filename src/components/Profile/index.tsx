import "./style.scss"
import downArrow from "../../assets/svgs/downArow.svg"
export const Profile = () => {
    return (
        <div className="user-profile">
            <section className="user-img">
                <img src="/assets/svgs/imgbg.svg" alt="" />
            </section>
            <p>Adedeji</p>
            <section>
                <img src={downArrow} alt="" />
            </section>
        </div>
    )
}