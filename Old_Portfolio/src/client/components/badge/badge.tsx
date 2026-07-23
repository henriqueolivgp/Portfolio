import { ComponentProps } from "react";

interface BadgeProps extends ComponentProps<"section"> {
  text1: string;
  text2?: string;
  Icon: React.ElementType;
  bgColor: string;
}

export const Badge = ({ Icon, text1, text2, bgColor }: BadgeProps) => {
  return (
    <>
      <section
        className={`flex text-gray-200 justify-center items-center ${bgColor} p-1 rounded-md w-auto`}
      >
        <Icon className="hidden sm:flex text-xl" />{" "}
        {/* Ícone fornecido como prop */}
        <span className="lg:text-lg sm:text-md xs:text-sm font-semibold sm:me-2 xs:me-1 sm:px-2.5 xs:px-1.5 py-0.5 rounded-sm text-center">
          {text1}
          <span className="hidden s:inline ">{text2}</span>
        </span>
      </section>
    </>
  );
};
