import cn from "classnames";
import {UseDataContext} from "../context/dataContext";
import {  StaticImage } from "gatsby-plugin-image";

export default ({ className }: { className?: string }) => {
    const { dataImages } = UseDataContext()
    return (
    <footer className={cn(className, "w-full bg-[rgba(255,255,255,1)]")}>
      <div className={"container px-20 py-16"}>
          <section>
              <a href="https://www.instagram.com/pugachevmark/">
                  <img src={dataImages?.ytInstagramCars?.childImageSharp?.resize?.src} alt="Insta" className='w-full'/>
              </a>
          </section>
      </div>
    </footer>
  );
};
