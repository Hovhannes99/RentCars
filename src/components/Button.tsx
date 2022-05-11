import { ReactNode } from "react";
import cn from "classnames";


type VariantType = "Primary" | "Secondary";

const styles = (variant?: VariantType) => {
  switch (variant) {
    case "Primary":
      return "btn btn--wider bg-white text-black uppercase mx-auto sm:mx-0";
      break;
    case "Secondary":
      return "btn btn--wider bg-black text-white bg-opacity-30 mx-auto sm:ml-0 sm:mr-4";
      break;
    default:
      return "btn btn--wider bg-black text-white bg-opacity-30 mx-auto sm:ml-0 sm:mr-4";
      break;
  }
};

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  variant?: VariantType;
}

export default ({ onClick, className, children, variant }: ButtonProps) => {
  return (
    <button className={cn(className, styles(variant))} onClick={onClick}>
      {children}
    </button>
  );
};
