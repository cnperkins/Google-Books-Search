import React from "react";
import "./style.css"

export function Form(props) {
    return (
        <div className="Form-group Form-group-lg">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

export function SearchButton({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["search btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}