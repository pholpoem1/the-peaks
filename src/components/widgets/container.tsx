import React from "react";

interface IContainer {
  children: JSX.Element;
}

const Container = (props: IContainer) => {
  return (
    <div className="container">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Container;
