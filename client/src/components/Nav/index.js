import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Google-Books</Link>
            </li>
            <li>
                <Link to="/savedbooks">Saved</Link>
            </li>
        </ul>
    );
};

export default Nav;
