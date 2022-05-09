import cn from "classnames";
import { graphql } from "gatsby";
import React from "react";
import { Phone } from "../components/contact-ways";

export const HomePage = (props) => {
  return (
    <>
      <section>
        {/**
         * pugachev.mp4 video
         * background image static/hero-image.jpg
         */}
      </section>
      <section>
        <div>          
            <h1>Welcome to the #1 Luxury and Exotic Car Rental in Miami</h1>
            <p >
              <span>Are you impressed with our prices?</span>
              <span>Because we are not brokers!</span>
              <span>We own our fleet!</span>
            </p>
            <p>Contact Us to Book Your Car Today!</p>
            <Phone />
            <a>Book Now</a>
            <h2>Pick Your Next Ride</h2>
          </div>
          {/** Car list */}
          {/** youtube
           * youtube id: 0JEWBKZ5_UM
           * img: static/yt-rent-car.webp
           */}
          <div          
            dangerouslySetInnerHTML={{ __html: props.data.home.b1 }}
          />
      </section>
      <section>
        <div dangerouslySetInnerHTML={{ __html: props.data.home.b2 }}/>
        {/** youtube
         * youtube id: pdK4gwB5PvM
         * img: static/yt-couple-rent-car.webp
         */}
      </section>
      <section className="py-14 container">
        <p className="text-center text-gray-100 text-xl lg:text-2xl xl:text-3xl">
          <a href="https://g.page/pugachevLuxuryCarRental?we">
            Pugachev Luxury Car Rental in Google My Business
          </a>
        </p>
      </section>
      <section>
        {/**
         * img: static/insta_big.jpg
         */}
      </section>
    </>
  );
};

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
