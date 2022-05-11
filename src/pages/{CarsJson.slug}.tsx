import cn from "classnames";
import {graphql, Link, PageProps} from "gatsby";
import {ComponentProps, Fragment, useEffect, useState} from "react";



import {Instagram, Telegram, WhatsApp} from "../components/ContactWays";
import AboutCar from "../components/AbboutCar";

const CarInfo = ({
                     info,

                     className,
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

const ApplyForm = ({className}: { className: string }): JSX.Element => (
    <div>
        {/*        <div>*/}
        {/*            <WhatsApp*/}
        {/*                text="Request in WhatsApp"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <Telegram*/}
        {/*                text="Request in WhatsApp"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <Instagram*/}
        {/*                text="Request in WhatsApp"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <hr/>*/}
        {/*        <div>*/}
        {/*            We accept BITCOINS for payment!*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <Link className="underline" to="/">*/}
        {/*                Security Service Available!*/}
        {/*            </Link>{" "}*/}
        {/*            Ask about it now!*/}
        {/*        </div>*/}
        {/*        <div*/}
        {/*            className={cn("p-2", "bg-price-change text-white", "my-auto text-center")}*/}
        {/*        >*/}
        {/*            Prices are subject to change depending on dates!*/}
        {/*        </div>*/}
        {/*        <div className={cn("p-2", "bg-accept text-white", "my-auto text-center")}>*/}
        {/*            We accept any country driver license!*/}
        {/*        </div>*/}
        {/*        <div className={cn("p-2", "bg-blue-400 text-white", "my-auto text-center")}>*/}
        {/*            <Link to="/">*/}
        {/*                When ordering a car, you get a <strong>20%</strong> discount on rental{" "}*/}
        {/*                <strong>Boat 42 Vandutch</strong>! Ask the manager about it!*/}
        {/*            </Link>*/}
        {/*        </div>*/}
        {/*        <form className="flex flex-col gap-y-4">*/}
        {/*            <input placeholder="Name"/>*/}
        {/*            <input placeholder="Email"/>*/}
        {/*            <input placeholder="Phone"/>*/}
        {/*            <input placeholder="Pick Up Date"/>*/}
        {/*            <input placeholder="Return Up Date"/>*/}
        {/*            <textarea*/}
        {/*                placeholder="Comments"*/}
        {/*                rows={5}*/}
        {/*            />*/}
        {/*            <label>*/}
        {/*                <input checked={true} type="checkbox"/> I agree with{" "}*/}
        {/*                <strong>Terms and Conditions*</strong>*/}
        {/*            </label>*/}
        {/*            <div>*/}
        {/*                Note* We are negotiating a possible additional discount for public*/}
        {/*                figures and celebrities!*/}
        {/*            </div>*/}
        {/*            <button>*/}
        {/*                Submit*/}
        {/*            </button>*/}
        {/*        </form>*/}
        {/*    </div>*/}
        {/*);*/}

        {/*const Title = ({*/}
        {/*                   className,*/}
        {/*                   price,*/}
        {/*                   title,*/}
        {/*               }: { className?: string; title: string; price: number }) => (<div className={className}>*/}
        {/*        <h1 className={cn("text-white uppercase font-bold text-2xl md:text-4xl")}>*/}
        {/*            {title}*/}
        {/*        </h1>*/}
        {/*        <h2>*/}
        {/*      <span className="text-red-500 text-xl md:text-3xl font-bold">*/}
        {/*        ${price}*/}
        {/*      </span>*/}
        {/*            <span className="text-base md:text-xl">/ Per Day</span>*/}
        {/*        </h2>*/}
    </div>
);
// interface IAboutCar  {
//     car:(slug:{eq:string}) => CarQueryQuery
// }
export const CarPage = (props) => {
    const {car} = props.data;
    const {info} = car;
    const [carPhoto, setCarPhoto] = useState('');
    useEffect(()=>{
        setCarPhoto(car.slug)
    }, [car])
    return <AboutCar car={car} />
};

export default CarPage;

export const query = graphql`
  query CarQuery($make: String!, $slug: String!) {
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
      yt
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
