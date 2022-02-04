import React from "react";
import { IconBox } from "./NavigationItem.styles";

const NavigationItem = () =>{
    return (
    <Link href={href}>
        <IconBox>
            <Icon color="green" size="30"/>
        </IconBox>
        <Text>{text}</Text>
    </Link>
    );
};

export default NavigationItem;