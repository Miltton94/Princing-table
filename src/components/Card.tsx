import { ReactNode } from "react";
import classNames from "classnames";
import Button from "./Button";

type PropsCard = {
  title: string;
  plan: string;
  price?: string;
  sign: string;
  children: ReactNode;
  isPremium?: boolean;
};

const Card = ({
  title,
  plan,
  price,
  sign,
  children,
  isPremium = false,
}: PropsCard) => {
  return (
    <div
      className={classNames(
        isPremium ? "bg-gray-900" : "bg-white",

        "max-h-[454px] h-full w-full flex-1 border border-gray-200 rounded-[10px] p-8 relative lg:max-w-[600px] hover:border-purple-100"
      )}>
      <div className="flex justify-center">
        {isPremium && (
          <strong className="bg-orange-500 text-xs font-bold items-center uppercase text-gray-900 py-2 px-4 rounded absolute -top-4 ">
            Mais vantajoso
          </strong>
        )}
      </div>

      <span className="text-sm text-purple-200 mt-4 font-semibold self-start">
        {title}
      </span>

      <div
        className={classNames(
          "flex items-center gap-2 justify-between mt-2 text-gray-800 xs:flexcol",
          {
            "text-white": isPremium,
          }
        )}>
        <strong className="text-3xl font-bold">{plan}</strong>
        {price && (
          <span className="text-lg font-semibold">
            R$<strong className="font-bold text-xl">{price}</strong>/mês
          </span>
        )}
      </div>

      <Button premium={isPremium}>{sign}</Button>
      <span
        className={classNames(
          isPremium ? "border-gray-700" : "border-gray-300",
          "block w-full border mb-8"
        )}></span>

      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
};

export default Card;
