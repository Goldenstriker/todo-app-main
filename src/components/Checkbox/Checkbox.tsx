import React, { useState } from "react";
import checkIcon from "../../assets/images/icon-check.svg";

export type CheckBoxProps = {
  checked?: boolean;
  onChanged?: (ev: React.MouseEvent<HTMLElement>, value?: boolean) => void;
};

const Checkbox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const [checked, setChecked] = useState(props.checked);

  const onChanged = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      setChecked(!checked);
      props.onChanged && props.onChanged(ev, !checked);
    },
    [checked]
  );

  return (
    <div
      className={`w-[20px] h-[20px] rounded-full bg-gray border-[1px] shrink-0   ${
        checked ? "bg-checkBoxBackGroundColor" : "border-checkBoxBorderColor"
      }`}
      onClick={onChanged}
    >
      <img
        src={checkIcon}
        alt="check"
        className={`relative top-[4px] left-[4px] p-0  z-10 ${
          checked ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Checkbox;
