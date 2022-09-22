import React from "react";
import Price from "./price";

export default {
    title: 'Цена (Price)'
}

const Template = (args) => <Price {...args} />;

export const OldPrice = Template.bind({});

OldPrice.args = {
    value:1000
}

export const FullPrice = Template.bind({});
FullPrice.args = {
    value:500
}