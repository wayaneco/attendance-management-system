"use client";

import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Input } from "../Input";

type ModalProps = PropsWithChildren & {
  show: boolean;
  onClose: () => void;
  header: React.ReactNode | string;
  footer?: React.ReactNode;
};

export const Modal = ({
  show,
  footer,
  header,
  children,
  onClose,
}: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-500/50 transition-all duration-500 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="h-full flex items-center justify-center">
        <div
          className={`w-[500px] max-h-[80vh] ${
            show ? "scale-100" : "scale-90"
          }`}
        >
          <Card className="!p-0 overflow-hidden">
            <div className="flex flex-col">
              {/** MODAL HEAD **/}
              <div className="flex items-center justify-between p-5 bg-pink-500 text-gray-50">
                {header}
                <div className="cursor-pointer text-gray-50" onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              {/* MODAL BODY */}
              <div className="p-5">
                <div className="flex-1">{children}</div>
              </div>
              {/* MODAL FOOTER */}
              {footer && (
                <>
                  <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <div className="flex px-5 py-2 ">{footer}</div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
