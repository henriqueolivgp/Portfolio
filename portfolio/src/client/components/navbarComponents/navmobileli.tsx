import { Link } from "react-router-dom";

interface NavMobileProps {
  name: string,
  to: string;
}

export const NavMobileLi = ({to, name}: NavMobileProps) => {
  return (
    <>
      <li>
        <Link
          to={to}
          className="w-full no-underline "
        >
          {name}
        </Link>
      </li>
    </>
  );
};
