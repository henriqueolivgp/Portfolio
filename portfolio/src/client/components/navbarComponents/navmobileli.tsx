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
          className="w-full border-b rounded-t-lg no-underline "
        >
          {name}
        </Link>
      </li>
    </>
  );
};
