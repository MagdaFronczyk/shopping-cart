import {
    Link
} from 'react-router-dom';
import React from "react";

const LinkButton = ({ path, label }) => (
    <button>
        <Link to={path}>{label}</Link>
    </button>
)

export default LinkButton;