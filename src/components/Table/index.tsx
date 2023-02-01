import moment from "moment";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../request/getUser";
import { userType } from "../../types/userType";
import { users } from "../../utils/users";
import { FilterTable } from "../Filter";
import { ActionModal } from "../Helpers/ActionBar/ActionsTag";
import { StatusTag } from "../Helpers/StatusTag";
import { LoaderContainer } from "../LoaderContainer";
import "./style.scss";

export const UserTable = () => {
  const [user, setUser] = useState<userType[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!filters);
  };

  const handleGetUser = async () => {
    try {
      setLoading(true);
      const res = await fetchUsers();
      setUser(res);
      setLoading(false);
      // console.log(res);
    } catch (error: any) {
      setLoading(false);
      console.log(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    handleGetUser();
  }, []);
  const tableHeader = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date Joined",
    "Status",
  ];

  return (
    <div className="">
      <div className="table-containerr">
        {filters && <FilterTable />}
        {loading ? (
          <LoaderContainer />
        ) : (
          <table>
            <thead className="table-thead">
              <tr>
                {tableHeader.map((data) => (
                  <td className="td-content">
                    <div className="td-content-flex">
                      <p>{data}</p>
                      <img
                        onClick={handleShowFilter}
                        src="/assets/svgs/nav.svg"
                        alt=""
                      />
                    </div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="tbody">
              {user.map((user, i) => {
                return (
                  <tr>
                    <td>{user?.orgName}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phoneNumber}</td>
                    <td>{moment(user?.createdAt).format("lll")}</td>
                    <td>
                      <StatusTag text={"active"} />
                    </td>
                    <td>
                      <ActionModal id={i} link={user} />
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="pagination">
        <div>Showing <select className="select"> <option value="100">100</option> </select>  out of 100</div>
        <div>
          <button className="button-style pagination-box button-active pagination-number">&lt;</button>
          <button className="button-style button-active">1</button>
          <button className="button-style">2</button>
          <button className="button-style">3</button>
          <button className="button-style">...</button>
          <button className="button-style">15</button>
          <button className="button-style">16</button>
          <button className="button-style button-active">&gt;</button>
        </div>
      </div>
    </div>
  );
};
