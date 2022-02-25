import React, { useContext } from "react";

import styles from "./dashboard.module.css";
import Footer from "./footer/footer";
import { LogContext } from "../../store/logContext";
import DashboardBody from "./dashboard-body/dashboardBody";

const Dashboard = props => {
    const LogCtx = useContext(LogContext)
    return <div>
        {LogCtx.isLoggedIn && <DashboardBody />}
        <Footer />
    </div>
};

export default Dashboard;