import React from "react";

const Field = ({ label, children, htmlFor, error, required }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-white text-sm font-semibold ${
            required
              ? 'after:content-["*"] after:ml-0.5 after:text-pink-500'
              : 'after:contents-["Optional"] after:ml-0.5 after:text-white'
          }`}
        >
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
const getChildId = (children) => {
  const childrenArray = React.Children.toArray(children);

  // Example handling for multiple children
  const ids = childrenArray.map((child) => {
    if ("id" in child?.props) {
      return child.props.id;
    }
    return null; // Or handle differently if id is not present
  });

  return ids;
};
export default Field;
