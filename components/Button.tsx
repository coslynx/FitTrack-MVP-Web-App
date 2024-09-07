import React from "react";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "primary",
  icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-${type === "primary" ? "primary" : "secondary"} 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded 
        hover:bg-${
          type === "primary" ? "secondary" : "primary"
        } 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;