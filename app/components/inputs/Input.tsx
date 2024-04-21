"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeHolder: String;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    errors,
    placeHolder,
  } = props;
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
