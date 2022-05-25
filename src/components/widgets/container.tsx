import React from "react";

interface IContainer {
  children: JSX.Element;
}

const Container = (props: IContainer) => {
  return <div style={{ width: "100%", height: "100%" }}>{props.children}</div>;
};

export default Container;
