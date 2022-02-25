import React, { useContext } from "react";

import styles from "./footer.module.css";
import { LogContext } from "../../../store/logContext";
import { NOTIFY } from "../../../api/notift-api";
import { Error_Toast, Success_Toast } from "../../ui/toast/toast";

const Footer = props => {
    const LogCtx = useContext(LogContext);

    const handleLogOut = () => {
        LogCtx.setIsLoggedIn(false);
        localStorage.removeItem("MeldCX_Token")
    }
    const notifyData = {
        name: "Nihal Abedin",
        email: "nihal.abedin.annon99@gmail.com",
        repoUrl: "https://github.com/Annon007/MeldCX.git",
        message: `What do sprinters eat before a race?
        => Nothing. They FAST 🤣`,

    }
    const handleNotify = async () => {
        const res = await NOTIFY(notifyData);
        if (res.status === 401) {
            LogCtx.setIsLoggedIn(false);
            localStorage.removeItem("MeldCX_Token");
            Error_Toast(res.error);
        } else if (res.status === 400) {
            Error_Toast(res.error)
        } else if (res.status === 200) {
            Success_Toast(res.msg);
        } else {
            Success_Toast(res.msg);
        }

    }
    return <div className={styles.footer}>
        <button className={styles.notify} onClick={handleNotify}>NOTIFY</button>
        <button className={styles.logout} onClick={handleLogOut}>LOG OUT</button>
    </div>
};

export default Footer;