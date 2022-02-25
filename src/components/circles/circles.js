import React from "react";

const Circles = props => {
    const generateRandomNumber = (min, max) => {
        return `${Math.floor(Math.random() * (max - min + 1) + min)}%`
    }
    const styles = {
        position: "absolute",
        width: "4rem",
        height: "4rem",
        top: generateRandomNumber(1, 80),
        left: generateRandomNumber(1, 95),
        borderRadius: "50%",
        backgroundColor: "#fff",
        transition: ` all 0.2s ease-out`,
        border: "1px solid #ff7043",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    }
    return <div style={styles}>

    </div>
};

export default Circles