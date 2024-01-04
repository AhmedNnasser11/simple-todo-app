import React from "react";
import { RadioTypes } from "../../types";

const Radio = ({ id, name, onChange, checked }: RadioTypes) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="flex gap-1 items-center">
      <label className="text-gray-800" htmlFor={String(id)}>
        {name}
      </label>
      <input
        type="radio"
        onChange={handleChange}
        name={name}
        id={String(id)}
        checked={checked}
      />
    </div>
  );
};

export default Radio;
