import {
    Link
} from 'react-router-dom';
import React from "react";

const LinkButton = ({ path, label, type }) => (
    <button className={`${type}link-button`}>
        <Link to={path}>{label}</Link>
    </button>
)

export default LinkButton;