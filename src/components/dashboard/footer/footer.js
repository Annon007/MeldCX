import React, { useContext } from "react";

import styles from "./footer.module.css";
import { LogContext } from "../../../store/logContext";
import { NOTIFY } from "../../../api/notift-api";

const Footer = props => {
    const LogCtx = useContext(LogContext);

    const handleLogOut = () => {
        LogCtx.setIsLoggedIn(false);
    }
    const notifyData = {
        name: "Nihal Abedin",
        email: "nihal.abedin.annon99@gmail.com",

    }
    const handleNotify = NOTIFY()
    return <div className={styles.footer}>
        <button className={styles.notify} onClick={handleNotify}>NOTIFY</button>
        <button className={styles.logout} onClick={handleLogOut}>LOG OUT</button>
    </div>
};

export default Footer;