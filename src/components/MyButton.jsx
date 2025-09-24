import PropTypes from "prop-types";

import "./MyButton.css";

export const MyButton = ({ state, color, size, label, ...props }) => {
  const mode =
    state === "primary"
      ? "storybook-button--primary"
      : state === "secondary"
      ? "storybook-button--secondary"
      : state === "text"
      ? "storybook-button--text"
      : "";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={
        mode === "storybook-button--primary"
          ? { backgroundColor: color, color: "white", borderColor: color }
          : mode === "storybook-button--secondary"
          ? { borderColor: color, color: color }
          : {}
      }
      {...props}
    >
      {label}
    </button>
  );
};

MyButton.propTypes = {
  state: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
MyButton.defaultProps = {
  state: "primary",
  color: "blue",
  size: "medium",
  onClick: undefined,
};
