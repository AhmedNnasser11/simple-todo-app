// IconButton.tsx
import React from "react";
import Button from "../Button";
import { IconButtonProps } from "../../../types";

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <Button className="flex items-center justify-center w-8 h-8 text-gray-900 bg-slate-100 hover:bg-slate-300" {...props}>
      <span className="flex items-center justify-center">{children}</span>
    </Button>
  );
};

export default IconButton;
