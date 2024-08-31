"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, type = "button", className = "", ...others } = props;
  return (
    <button
      {...others}
      type={type}
      className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
    >
      {children}
    </button>
  );
};
