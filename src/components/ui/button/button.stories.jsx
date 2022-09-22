import React from "react";
import Button from "./button";

export default {
    title: 'Кнопка (Button)'
}

const Template = (args) => <Button {...args} />;

export const OldButton = Template.bind({});

OldButton.args = {
    children: 'Купить',
    link: false,
}

OldButton.argTypes = { onClick: { action: 'clicked' } }