// import { Link } from "react-router-dom";

interface NavLiProps {
  name: string,
  to: string;
}

export const NavLi = ({name, to}: NavLiProps) => {
  return (
    <>
      <li>
        <a
          href={to}
          className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 "
        >
          {name}
        </a>
      </li>
    </>
  );
};
