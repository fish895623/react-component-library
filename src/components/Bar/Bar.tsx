import React from "react";

export interface ButtonPropss {
  label: string;
}

const Bar = (props: ButtonPropss) => {
  return <>Hello{props.label}</>;
};

export default Bar;
