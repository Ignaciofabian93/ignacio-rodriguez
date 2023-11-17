"use client";
import React, { useEffect } from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
import { useLanguage } from "@/context/language";

const CustomSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);
  const { switchLanguage } = useLanguage();

  useEffect(() => {
    if (isSelected) {
      switchLanguage("en");
    } else {
      switchLanguage("es");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <div className="flex items-center gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? "En" : "Es"}
        </div>
      </Component>
      <p className="text-default-500 select-none">
        {isSelected ? "English" : "Español"}
      </p>
    </div>
  );
};

export default CustomSwitch;
