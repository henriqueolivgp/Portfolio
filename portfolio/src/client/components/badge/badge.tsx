import { ComponentProps } from "react";

interface BadgeProps extends ComponentProps<"div"> {
  text:string
  Icon: React.ElementType;
  bgColor: string;
}

export const Badge = ({ Icon, text, bgColor }: BadgeProps) => {
  return (
    <>
      <div className={`flex text-gray-200 justify-center items-center ${bgColor} p-1 rounded-md w-auto`}>
      <Icon className="text-xl" /> {/* Ícone fornecido como prop */}
      <span className="text-md font-semibold me-2 px-2.5 py-0.5 rounded-sm">
        {text}
      </span>
    </div>
    </>
  );
};
