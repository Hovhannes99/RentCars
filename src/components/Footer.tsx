import cn from "classnames";
// @ts-ignore
import instagram from '../static/insta_big.jpg'

export default ({ className }: { className?: string }) => {
  return (
    <footer className={cn(className, "w-full bg-[rgba(255,255,255,1)]")}>
      <div className={"container px-20 py-16"}>
          <section >
              <a href="https://www.instagram.com/pugachevmark/">
                  <img srcSet={instagram} alt="insta"/>
              </a>
          </section>
      </div>
    </footer>
  );
};
