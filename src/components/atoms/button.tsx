import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void | null | undefined;
  disabled?: boolean;
  variant: "blue" | "red" | "green" | "gray" | "disabled";
}

export const Button = ({
  children,
  onClick,
  className,
  variant = "blue",
}: IButtonProps) => {
  const variants = {
    blue: "text-white bg-gradient-to-r to-blue-500 via-blue-400 from-blue-500 ",
    red: "text-white bg-gradient-to-r to-red-500 via-red-400 from-red-500",
    green:
      "text-white bg-gradient-to-r to-green-500 via-green-400 from-green-500",
    gray: "text-white bg-gradient-to-r to-gray-500 via-gray-400 from-gray-500",
    disabled:
      "cursor-not-allowed text-white bg-gradient-to-r to-gray-500 via-gray-400 from-gray-500",
  };

  return (
    <>
      <button
        onClick={variant === "disabled" ? undefined : onClick}
        className={`${className} ${variants[variant]} bg-size-200 bg-pos-0 hover:bg-pos-100 rounded px-4 py-2 border-none transition-all duration-700 w-full lg:w-auto`}
      >
        {children}
      </button>
    </>
  );
};
