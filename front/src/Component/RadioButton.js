import React from "react";
import "antd/dist/antd.css";
import { Radio } from "antd";

export function RadioButton() {
  const [isPresent, setIsPresent] = React.useState("true");
  const plainOptions = ["Présent", "Absent"];

  return (
    <Radio.Group
      options={plainOptions}
      onChange={() => setIsPresent((bool) => !bool)}
      value={isPresent ? "Présent" : "Absent"}
    />
  );
}