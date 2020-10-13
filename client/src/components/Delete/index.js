import React from "react";

function DeleteBook({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={
            ["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default DeleteBook;
