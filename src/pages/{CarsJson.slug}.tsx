import cn from "classnames";
import {graphql} from "gatsby";
import {Fragment, useEffect} from "react";
import AboutCar from "../components/AbboutCar";
import {UseDataContext} from "../context/dataContext";

const CarInfo = ({
                     info, className,
                 }: {
    info: any;
    className?: string;
}): JSX.Element => {
    return (<>
            <div
                className={cn(
                    className,
                    "grid grid-cols-2",
                    "gap-y-2 ",
                    "text-base md:text-xl"
                )}
            >
                {Object.entries(info).map(([k, v]) => {
                    let key = k;
                    if (key === "security") {
                        key = "Security Deposit";
                    } else if (key === "mph") {
                        key = "0-60mph in";
                    } else if (key === "hp") {
                        key = "Horse Power";
                    }
                    return (
                        <Fragment key={key}>
                            <div>{key}:</div>
                            <div className="text-white">{v as string}</div>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
}

export const CarPage = (props) => {
    const {car} = props.data;
    const { setDataImages } = UseDataContext()
    useEffect(()=>{
        setDataImages(props.data)
    },[props.data])
    return <AboutCar car={car} data={props.data} />
};

export default CarPage;

export const query = graphql`
  query CarQuery($make: String!, $slug: String!) {
       ytInstagramCars: file(name: { glob: "insta_big" }) {
            childImageSharp {
                resize(grayscale: false, width: 1000) {
                    src
                }
            }
        }
    car: carsJson(slug: { eq: $slug }) {
      title
      slug
      price
      info {
        security: Security_Deposit_
        Includes: Includes_
        Transmission: Transmission_
        Seats: Seats_
        Engine: Engine_
        mph: _0_60mph_in_
        MSRP: MSRP_
        hp: Horse_Power_
      }
      image: imageFile {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            aspectRatio: 1.78
            placeholder: BLURRED
            webpOptions: { quality: 30 }
            transformOptions: { fit: FILL, cropFocus: CENTER }
          )
        }
      }
      mainThumbnail: imageFile {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 100
            aspectRatio: 1.4
            placeholder: BLURRED
            webpOptions: { quality: 30 }
            transformOptions: { fit: FILL, cropFocus: CENTER }
          )
        }
      }
      thumbnails {
        main: imageFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              aspectRatio: 1.78
              placeholder: BLURRED
              webpOptions: { quality: 30 }
              transformOptions: { fit: FILL, cropFocus: CENTER }
            )
          }
        }
        small: imageFile {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 100
              aspectRatio: 1.4
              placeholder: BLURRED
              webpOptions: { quality: 30 }
              transformOptions: { fit: FILL, cropFocus: CENTER }
            )
          }
        }
      }
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
    sameMakeCars: allCarsJson(
      filter: { make: { eq: $make }, slug: { ne: $slug } }
    ) {
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
              aspectRatio: 1.78
              placeholder: BLURRED
              webpOptions: { quality: 30 }
              transformOptions: { fit: FILL, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
