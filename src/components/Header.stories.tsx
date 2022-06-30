import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const MyName = Template.bind({});
MyName.args = {
  user: "mohammad",
  logo: "Babaei",
};

export const LoveName = Template.bind({});
LoveName.args = {
  user: "Sara",
  logo: "Haq Parast",
};
