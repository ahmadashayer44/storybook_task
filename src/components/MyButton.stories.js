import { fn } from "storybook/test";

import { MyButton } from "./MyButton";

export default {
  title: "Button_Task",
  component: MyButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    state: "primary",
    label: "This is the Primary Button",
    color: "blue",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    state: "secondary",
    label: "This is the Secondary Button",
    color: "red",
    size: "medium",
  },
};
export const Text = {
  args: {
    state: "text",
    label: "This is the Text Button",
    color: "green",
    size: "large",
  },
};
