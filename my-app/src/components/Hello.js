import React from "react";

/*function Hello() {
    return <h1>Hello, World!</h1>
}

// If default export then you can import by any name.
export default Hello;*/

// Else the export can be like this:
export const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      {props.children}
    </div>
  );
};
