// components/Modal.tsx

import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  title,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg p-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-2xl text-themis-text-gray">
            {title}
          </h1>
          <button onClick={onClose}>
            <span className="text-2xl text-themis-text-gray">×</span>
          </button>
        </div>
        <hr className="mt-4" />
        <div>{children}</div>
      </div>
    </div>
  );
}
