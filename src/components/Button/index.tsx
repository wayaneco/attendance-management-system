"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className = "", ...others } = props;
  return (
    <button
      {...others}
      type="button"
      className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800 ${className}`}
    >
      {children}
    </button>
  );
};
