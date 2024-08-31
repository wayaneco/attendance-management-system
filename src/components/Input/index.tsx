"use client";

import { HTMLInputTypeAttribute } from "react";

type InputProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  name?: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: React.HtmlHTMLAttributes<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const {
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    ...others
  } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={others?.id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:outline-pink-500 focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
};
