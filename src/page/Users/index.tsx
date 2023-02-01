import { Card } from "../../components/AnalyticsCard"
import { UserTable } from "../../components/Table"
import "./style.scss"
export const User = () => {
    return (
        <div>
            <div className="user-top-title">
                <h2>Users</h2>
            </div>
            <div className="card-wrapper">
                <Card id="1" img={"/assets/cards/all.svg"} title="User" totalNumber="2,453 " />
                <Card id="2" img={"/assets/cards/people.svg"} title="Active Users" totalNumber="2,4560" />
                <Card id="3" img={"/assets/cards/card.svg"} title="User With Loans" totalNumber="12,453 " />
                <Card id="4" img={"/assets/cards/group.svg"} title="Users with Savings" totalNumber="102,453" />
            </div>
            <>
                <UserTable />
            </>
        </div>
    )
}