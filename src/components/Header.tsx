import cn from "classnames";
import { Link } from "gatsby";
// @ts-ignore
import * as style from "/Users/hovo/Downloads/Telegram Desktop/pugachev_sta_soft/src/styles/car.module.scss"
// @ts-ignore
import Logo from "/Users/hovo/Downloads/Telegram Desktop/pugachev_sta_soft/src/static/logo-with-text-silver.png"

export const Header = ({ className }: { className?: string }) => {
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
          <img className={style.logo} src={Logo} alt={'logo'}/>
        </Link>
      </div>
    </header>
  );
};
