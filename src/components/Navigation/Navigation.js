import React from "react";
import NavigationItem from "../NavigationItem";

const Navigation = ({ links }) => {
    return links.map((link) => 
        <NavigationItem {...link} />
    );
};

export default Navigation;

