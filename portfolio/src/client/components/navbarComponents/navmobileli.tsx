import { Link } from "react-router-dom";

interface NavMobileProps {
  name: string,
  to: string;
}

export const NavMobileLi = ({to, name}: NavMobileProps) => {
  return (
    <>
      <li>
        <a
          href={to}
          className="w-full no-underline "
        >
          {name}
        </a>
      </li>
    </>
  );
};
