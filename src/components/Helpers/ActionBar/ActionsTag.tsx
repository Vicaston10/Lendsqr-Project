import { useState } from "react";
import { Link } from "react-router-dom";
import { userType } from "../../../types/userType";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
interface actionProps {
  id: number;
  link: userType;
}

export const ActionModal = ({ id, link }: actionProps) => {
  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate()

  const getUserDetails = (user: userType) => {
    sessionStorage.setItem("user", JSON.stringify(user))
    navigate("/user-details")
  }

  const handleShowOptions = () => {
    setShowOption(!showOption);
  };
  return (
    <>
      <img
        onClick={handleShowOptions}
        className="pointer-cursor"
        src={"/assets/svgs/dots.svg"}
        alt="actionbtn"

      />
      {showOption && (
        <div className="drop-down-container ">
          <div className="view_display btn" role={"button"} onClick={() => getUserDetails(link)}>

            <img src={"/assets/svgs/eyeIcon.svg"} alt="" />
            <span>View Details</span>
          </div>
          {/* </Link> */}
          <div className="flag_display btn" role={"button"} >

            <img src={"/assets/svgs/deleteIcon.svg"} alt="" />
            <span>Blacklist User</span>
          </div>
          <div className="flag_display btn" role={"button"} >

            <img src={"/assets/svgs/userEditIcon.svg"} alt="" />
            <span>Activate User</span>
          </div>
        </div>
      )}
    </>
  )
}
