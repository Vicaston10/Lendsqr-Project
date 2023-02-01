import { detailProp } from "../../../types/userType"
import "./styles.scss"
export const UserPersonalDetails = ({ detail }: detailProp) => {
    return (
        <div className="user-persona-container">
            <div className="personal-info-wrapper">
                <h4>Personal Information</h4>

                <div className="sub-user-container">
                    <div className="sub-user-wrapper">
                        <h6>Full Name</h6>
                        <span>{detail?.profile?.firstName} {detail?.profile?.lastName}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Phone Number</h6>
                        <span>{detail?.profile?.phoneNumber}</span>
                    </div><div className="sub-user-wrapper">
                        <h6>Email Address</h6>
                        <span>{detail?.email}</span>
                    </div><div className="sub-user-wrapper">
                        <h6>Bvn</h6>
                        <span>{detail?.profile.bvn}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Marital status</h6>
                        <span>{"-"}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Children</h6>
                        <span>{"-"}</span>

                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Type of residence</h6>
                        <span>{"-"}</span>

                    </div>
                </div>
            </div>
            <div className="personal-info-wrapper">
                <h4>Education and Employment</h4>
                <div className="sub-user-container">
                    <div className="sub-user-wrapper">
                        <h6> level of education </h6>
                        <span>{detail?.education?.level}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>employment status</h6>
                        <span>{detail?.education?.employmentStatus}</span>
                    </div><div className="sub-user-wrapper">
                        <h6>sector of employment</h6>
                        <span>{detail?.education?.sector}</span>
                    </div><div className="sub-user-wrapper">
                        <h6>office email</h6>
                        <span>{detail?.education?.officeEmail}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Monthly income</h6>
                        <span>{detail?.education?.monthlyIncome}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>loan repayment</h6>
                        <span>{detail?.education?.loanRepayment}</span>
                    </div>
                </div>
            </div>
            <div className="personal-info-wrapper">
                <h4>Socials</h4>
                <div className="sub-user-container">
                    <div className="sub-user-wrapper">
                        <h6>Twitter</h6>
                        <span>{detail?.socials?.twitter}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Facebook</h6>
                        <span>{detail?.socials?.facebook}</span>
                    </div><div className="sub-user-wrapper">
                        <h6>Instagram</h6>
                        <span>{detail?.socials?.instagram}</span>
                    </div>

                </div>
            </div>
            <div className="personal-info-wrapper">
                <h4>Guarantor</h4>
                <div className="sub-user-container">
                    <div className="sub-user-wrapper">
                        <h6>Full Name</h6>
                        <span>{detail?.guarantor?.firstName} {detail?.guarantor?.lastName}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Phone Number</h6>
                        <span>{detail?.guarantor?.phoneNumber}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Email Address</h6>
                        <span>{"-"}</span>
                    </div>
                    <div className="sub-user-wrapper">
                        <h6>Relationship</h6>
                        <span>{"-"}</span>
                    </div>


                </div>
            </div>

        </div>
    )
}