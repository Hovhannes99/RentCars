// @ts-ignore
import * as style from  "../../styles/layout.module.scss";
import {Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Cars = ({car}: any) => {
    return(
        <div className={style.carsWrapper}>
            <Link to={`/${car.slug}`}>
                <div className={style.car} >
                    <GatsbyImage alt={'image'} imgStyle={{borderRadius: '0.5rem'}} image={{...getImage(car.image.childImageSharp),}}  />
                </div>
            </Link>
            <p className={style.title}>{car.title}</p>
            <p className={style.price}>${car?.price}{car?.isSpecialOffer ? <span>Special Offer!</span> : ""}</p>
        </div>
    )
}


export default Cars
