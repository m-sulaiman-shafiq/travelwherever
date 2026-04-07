"use client";

import { toast } from "react-toastify";
import Image from "next/image";
import errorIcon from "@/assets/error-icon.png";
import successIcon from "@/assets/success-icon.png";

export const PrimaryToast = ({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) => {
  const icon =
    type === "success" ? (
      <Image src={successIcon} alt="success" width={24} height={24} />
    ) : (
      <Image src={errorIcon} alt="error" width={24} height={24} />
    );

  toast[type](message, {
    position: "top-right",
    icon,
    className:
      type === "success"
        ? "bg-green-50 text-green-700 border border-green-300"
        : "bg-red-50 text-red-700 border border-red-300",
  });
};