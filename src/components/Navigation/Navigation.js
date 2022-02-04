import React from "react";

const Navigation = ({ links }) => {
    return links.map( ({ href, text}) => (
    <div key={href}>
        <a href={href}>{text}</a>
    </div>
    ));
};

export default Navigation;