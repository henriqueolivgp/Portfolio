import { ComponentProps } from "react";

interface BadgeProps extends ComponentProps<"section"> {
  text: string;
  Icon: React.ElementType;
  bgColor: string;
}

export const Badge = ({ Icon, text, bgColor }: BadgeProps) => {
  return (
    <>
      <section
        className={`flex text-gray-200 justify-center items-center ${bgColor} p-1 rounded-md w-auto`}
      >
        <Icon className="text-xl" /> {/* Ícone fornecido como prop */}
        <span className="lg:text-lg sm:text-md xxs:text-sm font-semibold sm:me-2 xxs:me-1 sm:px-2.5 xxs:px-1.5 py-0.5 rounded-sm">
          {text}
        </span>
      </section>
    </>
  );
};
