import * as React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// @ts-ignore
import * as  style from "../../styles/car.scss";

const Cars = ({ cars }: any) => {
  return (
    <div className={style.carCards}>
      <div className={style.cars}>
        {cars.nodes.map((car): JSX.Element => {
          return (
            <div className={style.carsWrapper} key={car.slug}>
              <Link to={`${car.slug}`}>
                <div className={style.car}>
                  <GatsbyImage
                    alt={"image"}
                    imgStyle={{ borderRadius: "0.5rem" }}
                    image={{ ...getImage(car.image.childImageSharp) }}
                  />
                </div>
              </Link>
              <p className={style.title}>{car.title}</p>
              <p className={style.price}>
                ${car?.price}
                {car?.isSpecialOffer ? <span>Special Offer!</span> : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
