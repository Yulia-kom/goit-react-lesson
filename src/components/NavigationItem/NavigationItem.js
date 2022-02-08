import React from "react";
import {Link, IconBox, Text } from "./NavigationItem.styles";

const NavigationItem = (link) =>{
    return (
    <Link href={link.href}>
        <IconBox>
            <Icon color="green" size="30"/>
        </IconBox>
        <Text>{link.text}</Text>
    </Link>
    );
};

export default NavigationItem;