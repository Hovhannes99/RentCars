import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { CarsJsonGroupConnection} from "../graphql";
// @ts-ignore
import * as style from "/Users/hovo/Downloads/Telegram Desktop/pugachev_sta_soft/src/styles/layout.module.scss"
// @ts-ignore
import CarVideo from "/Users/hovo/Downloads/Telegram Desktop/pugachev_sta_soft/src/assets/pugachev.mp4"
import {Button} from "../components";
import Video from '../components/Video'
import Cars from "../components/Cars";


interface DataProps {
  home: {
    b1: string;
    b2: string;
  };
  cars: CarsJsonGroupConnection
}

export const HomePage = ({ data: { home , cars} }: PageProps<DataProps>) => {

  return(
      <div className={style.pageWrapper}>
          <section className={style.videoCar}>
              <video autoPlay muted loop>
                  <source src={CarVideo} type="video/mp4"/>
              </video>
              <div className={style.background}/>
          </section>
          <section className={style.listWrapper}>
              <div className={style.titles}>
                  <p className={style.bigTitle}>Welcome to the #1 Luxury and Exotic Car Rental in Miami</p>
                  <p className={style.texts}>
                      <span>Are you impressed with our prices? </span>
                      <span>Because we are not brokers! </span>
                      <span>We own our fleet! </span>
                  </p>
                  <p className={style.contactText}>Contact Us to Book Your Car Today!</p>
                  <div className={style.buttons}>
                      <Button variant={'Secondary'}>789.676.767</Button>
                      <Button variant={'Primary'}>Book Now</Button>
                  </div>
                  <h2>Pick Your Next Ride</h2>
              </div>
              <div className={style.carCards}>
                  <div className={style.cars}>
                      {cars.nodes.map((car, index) => {
                          return <Cars car={car}/>
                      })}
                  </div>
              </div>
              <section className={style.video}>
                  <Video
                      videoSrcURL="https://www.youtube.com/embed/0JEWBKZ5_UM"
                      videoTitle="Cars"
                  />
              </section>
              <section className={style.exoticCarWrapper}>
                  <div className={style.arrow}/>
                  <p className={style.title}> Call Today to Reserve an Exotic Car</p>
                  <p className={style.info}>We believe that you deserve the ultimate service when it comes to
                      luxury car rentals. We provide you with the best customer service possible – the
                      team of experienced managers file orders in the </p>
                  <p className={style.info}>Pick sides with your order and do not forget about exceptional
                      car wedding rentals, free pickup and delivery options. Everything
                      is available for your satisfaction. If you would like to reserve a
                      luxury or exotic car in Miami, call Pugachev Luxury Car Rental at </p>
                  <div className={style.video}>
                      <Video
                          videoSrcURL="https://www.youtube.com/embed/pdK4gwB5PvM"
                          videoTitle="Cars"
                      />
                  </div>
              </section>
              <section className={style.pugachev}>
                  <p className={style.text}>
                      <a href="https://g.page/pugachevLuxuryCarRental?we">
                          Pugachev Luxury Car Rental in Google My Business
                      </a>
                  </p>
              </section>
          </section>
      </div>
  );
}

export default HomePage;

export const query = graphql`
  {
    home: homePage {
      b1
      b2
    }
    ytRentCar: file(name: { glob: "yt-rent-car" }) {
      childImageSharp {
        resize(base64: true) {
          src
        }
      }
    }
    ytCoupleRentCar: file(name: { glob: "yt-couple-rent-car" }) {
      childImageSharp {
        resize(base64: true) {
          src
        }
      }
    }
   cars: allCarsJson {
      nodes {
        title
        slug
        price
        isSpecialOffer
        make
        image: imageFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
              aspectRatio: 1.78
              placeholder: BLURRED
              webpOptions: { quality: 30 }
              avifOptions: { quality: 30 }
              transformOptions: { fit: FILL, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
