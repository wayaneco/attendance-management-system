"use client";

import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & {
  className?: string;
};
export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-md shadow-sm bg-white p-8 ${className}`}>
      {children}
    </div>
  );
};
