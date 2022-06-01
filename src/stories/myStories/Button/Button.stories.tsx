import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../../components/Button";

const Meta = {
  title: "myStory/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

export default Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  size: "medium",
  variant: "regular",
  children: "Button",
};

Regular.storyName = "Regular";

export const Outlined = Template.bind({});
Outlined.args = {
  size: "medium",
  variant: "outline",
  children: "Button",
};

Outlined.storyName = "Outlined";

export const Ghost = Template.bind({});
Ghost.args = {
  size: "medium",
  variant: "ghost",
  children: "Button",
};

Ghost.storyName = "Ghost";

export const Small = Template.bind({});
Small.args = {
  size: "small",
  variant: "regular",
  children: "Button",
};

Small.storyName = "Small";

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  variant: "regular",
  children: "Button",
};

Medium.storyName = "Medium";

export const Large = Template.bind({});
Large.args = {
  size: "large",
  variant: "regular",
  children: "Button",
};

Large.storyName = "Large";
