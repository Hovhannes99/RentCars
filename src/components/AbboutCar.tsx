import {useState, useEffect} from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
// @ts-ignore
import * as style from "../styles/car.scss"
import {UseDataContext} from "../context/dataContext";

const AboutCar = ({car, data}) => {
    const [carPhoto, setCarPhoto] = useState()
    const { setDataImages } = UseDataContext()

    useEffect(()=>{
        setCarPhoto(car.image.childImageSharp)
        setDataImages(data)
    }, [car, data])
    return (
        <div className={style.carInfoWrapper}>
            <div className={style.infoWrapper}>
                <p className={style.title}>{car.title}</p>
                <p className={style.price}><span>${car.price}</span>/ Per Day</p>
                <div className={style.subtitleWrapper}>
                    <p className={style.property}>{car?.info && car.info['security'] ? 'Security Deposit:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info['security']}</p>
                    <p className={style.property}>{car?.info && car.info["Includes"] ? "Includes:" : ""}</p>
                    <p className={style.info}>{car?.info && car.info["Includes"]}</p>
                    <p className={style.property}>{car?.info && car.info['Transmission'] ? 'Transmission:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info['Transmission']}</p>
                    <p className={style.property}>{car?.info && car.info['Seats'] ? 'Seats:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info['Seats']}</p>
                    <p className={style.property}>{car?.info && car.info['Engine'] ? 'Engine:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info['Engine']}</p>
                    <p className={style.property}>{car?.info && car.info['mph'] ? '0-60mph in:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info['mph']}</p>
                    <p className={style.property}>{car?.info && car.info['MSRP'] ? 'MSRP:' : ""}</p>
                    <p className={style.info}>{car?.info && car.info["MSRP"]}</p>
                    <p className={style.property}>{car?.info && car.info["hp"] ? "Horse Power:" : ""}</p>
                    <p className={style.info}>{car?.info && car.info["hp"]}</p>
                </div>
            </div>
            <div className={style.carPhotos}>
                <div className={style.photo}>
                    <GatsbyImage  imgStyle={{borderRadius: "0.5rem"}} image={getImage(carPhoto)} alt={"imageCar"}/>
                </div>
                <div className={style.thumbnails}>
                    {car.thumbnails && car.thumbnails.map((item)=>{
                        return  <div className={style.img} onMouseEnter={()=>setCarPhoto(item.main.childImageSharp)}>
                            <GatsbyImage  imgStyle={{borderRadius: "0.5rem"}} image={getImage(item.small.childImageSharp)} alt={"cars"}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutCar;