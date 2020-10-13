import React, { useState } from "react";


function Save({ type = "default", className, children, onClick }) {

    const [setShow] = useState(false);
    const handleShow = () => setShow(true);

    const click = () => {
        handleShow()
        onClick()
    };

    return (
        <div>
            <button onClick={click} className={["btn btn-md", `btn-${type}`, className].join(" ")}>{children}</button>
        </div>
    );
};

export default Save;
