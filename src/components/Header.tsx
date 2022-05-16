import cn from "classnames";
import { Link } from "gatsby";
// @ts-ignore
import * as style from "../styles/car.module.scss"
import {UseDataContext} from "../context/dataContext";

export const Header = ({ className }: { className?: string }) => {
  const { dataImages } = UseDataContext()
  return (
    <header
        id={'avia-menu'}
      className={cn(
        className,
        "bg-black opacity-90 sticky top-0 z-20 h-20 page"
      )}
    >
      <div className={"container"}>
        <Link to={'/'}>
          <img className={style.logo} src={dataImages?.ytLogoRentCar?.childImageSharp?.resize?.src || 'https://pugachev.corewebops.com/static/ae363d59887ade58bde7a777b3847508/2b960/logo-with-text-silver.webp'} alt={'logo'}/>
        </Link>
      </div>
    </header>
  );
};
