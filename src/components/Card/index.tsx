"use client";

import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & {
  className?: string;
};
export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-md shadow-sm bg-gray-100 p-4 ${className}`}>
      {children}
    </div>
  );
};
