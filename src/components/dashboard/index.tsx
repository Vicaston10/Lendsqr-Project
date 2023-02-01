import { Header } from "../Header"
import { Layout } from "../Layout"
import { Sidebar } from "../Sidebar"
import "./styles.scss"
export const DashboardLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <div className="layout-flex">
                <div className="sidebar-flex">
                    <Sidebar />
                </div>
                <Layout>
                    {children}
                </Layout>
            </div>
        </div>
    )
}