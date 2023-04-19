import { ReactNode } from "react";
import classNames from "classnames";

type PropsButton = {
  premium: boolean;
  children: ReactNode;
};
const Button = ({ premium, children }: PropsButton) => {
  return (
    <a
      href="#"
      className={classNames(
        premium
          ? "bg-purple-100 border-none text-white hover:bg-purple-200"
          : " border-gray-800 text-gray-800 hover:bg-gray-800  hover:text-white",
        "w-full block text-center py-4 border my-8 text-base font-bold rounded transition-colors "
      )}>
      <span>{children}</span>
    </a>
  );
};

export default Button;
