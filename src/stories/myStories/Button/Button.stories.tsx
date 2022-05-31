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
  children: "Regular Button",
};

Regular.storyName = "Regular Button";

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
