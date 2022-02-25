import React, { useEffect, useState } from "react";

import styles from "./dashboardBody.module.css";
import Circles from "../../circles/circles";
const devices = [];
const DashboardBody = props => {
    // const [devices, setDevices] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        const getDevices = async () => {
            try {
                const senReq = fetch("http://35.201.2.209:8000/devices");
                const res = await senReq;
                if (!res.ok) {
                    return;
                }
                const data = await res.json();
                // setDevices(data.devices);
                devices.push(data.devices)
            } catch (err) {

            }
        };
        getDevices();
        const timer = setTimeout(() => {
            setFlag(!flag)
        }, 5000);
        return () => {
            clearTimeout(timer)
        }

    }, [flag]);

    return <div className={styles.bodyContainer}>
        {devices.map((el, i) => <Circles key={i} />)}
        <p className={styles.number}>{devices?.length}</p>
        <p className={styles.text}>DEVICES </p>
        <p className={styles.text}>ONLINE </p>
    </div>
};

export default DashboardBody;