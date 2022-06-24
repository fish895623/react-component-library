import React from "react";

export interface ButtonProps {
  label: string;
}

const Gantt = (props: ButtonProps) => {
  return <>Hello{props.label}</>;
};

export default Gantt;
