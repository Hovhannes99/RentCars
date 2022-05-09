import cn from "classnames";
import {graphql, Link, PageProps} from "gatsby";
import {ComponentProps, Fragment, VFC} from "react";

import {Instagram, Telegram, WhatsApp} from "../components/contact-ways";

const CarInfo: VFC = ({info, className}: { info: any, className: string }) => {
    return (
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
                        <div className="text-white">{v}</div>
                    </Fragment>
                );
            })}
        </div>
    );
};

const ApplyForm: VFC<{ className?: string }> = ({className}) => (
    <div>
        <div>
            <WhatsApp
                text="Request in WhatsApp"
            />
        </div>
        <div>
            <Telegram
                text="Request in WhatsApp"
            />
        </div>
        <div>
            <Instagram
                text="Request in WhatsApp"
            />
        </div>
        <hr/>
        <div>
            We accept BITCOINS for payment!
        </div>
        <div>
            <Link className="underline" to="/">
                Security Service Available!
            </Link>{" "}
            Ask about it now!
        </div>
        <div
            className={cn("p-2", "bg-price-change text-white", "my-auto text-center")}
        >
            Prices are subject to change depending on dates!
        </div>
        <div className={cn("p-2", "bg-accept text-white", "my-auto text-center")}>
            We accept any country driver license!
        </div>
        <div className={cn("p-2", "bg-blue-400 text-white", "my-auto text-center")}>
            <Link to="/">
                When ordering a car, you get a <strong>20%</strong> discount on rental{" "}
                <strong>Boat 42 Vandutch</strong>! Ask the manager about it!
            </Link>
        </div>
        <form className="flex flex-col gap-y-4">
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Phone"/>
            <input placeholder="Pick Up Date"/>
            <input placeholder="Return Up Date"/>
            <textarea
                placeholder="Comments"
                rows={5}
            />
            <label>
                <input checked={true} type="checkbox"/> I agree with{" "}
                <strong>Terms and Conditions*</strong>
            </label>
            <div>
                Note* We are negotiating a possible additional discount for public
                figures and celebrities!
            </div>
            <button>
                Submit
            </button>
        </form>
    </div>
);

const Title: VFC<{ className?: string; title: string; price: number }> = ({
                                                                              className,
                                                                              price,
                                                                              title,
                                                                          }) => (
    <div className={className}>
        <h1 className={cn("text-white uppercase font-bold text-2xl md:text-4xl")}>
            {title}
        </h1>
        <h2>
      <span className="text-red-500 text-xl md:text-3xl font-bold">
        ${price}
      </span>
            <span className="text-base md:text-xl">/ Per Day</span>
        </h2>
    </div>
);

export const CarPage: VFC = (props) => {
    const {car} = props.data;
    const {info} = car;

    return (
        <>
            <section>
                <Title price={car.price} title={car.title}/>
                {/** car gallery - use cars */}
                <CarInfo info={info}/>
                <ApplyForm className=""/>
                <div>
                    {/**
                     * video id: 0rZurmrsCFk
                     * img: https://i.ytimg.com/vi_webp/0rZurmrsCFk/maxresdefault.webp
                     */}
                    <p>
                        If you are planning your <Link to="/">vacation in Miami</Link>, then
                        you are lucky. Here you will find many entertainment options that
                        suit any personal preference. There is a calm and cultural holiday,
                        and the city offers a lot of adrenaline and incredible experiences.
                        Choose any place that will give you more pleasure and many companies
                        arrange all the details. This town was created for an eternal luxury
                        holiday and every location speaks about it.
                    </p>
                    <h2>Sunny Miami a hot-topic resort city</h2>
                    <p>
                        Every resident and visitor of this place prefers a luxurious
                        vacation to have fun, so he is looking for the best service. Miami
                        has many must-see variants to visit. Enjoy impressive villas and
                        palaces, old streets, modern skyscrapers, the stunning Atlantic
                        Ocean, and water activities. Choose any theme and your pastime will
                        be great.
                    </p>
                    <h3>Overland & aquatic sights to enjoy</h3>
                    <p>
                        Even if you have varied tastes and want to try all types of
                        vacations, Miami has prepared them for you. Here, each person can
                        relax in his style, so you only need to choose a place.{" "}
                        <Link to="/">Hire a glorious car</Link> or{" "}
                        <Link to="/">magnificent yacht</Link> and go for a delightful
                        journey.
                    </p>
                </div>
                <div>
                    <hr className="border-current"/>
                    {
                        /** similar cars show here */
                    }
                    <div>
                        <h4>
                            The city and the ocean fascinate and delight; now you have a great
                            opportunity to see all these beauties:
                        </h4>
                        <ul>
                            <li>South beach</li>
                            <li>Wynwood Graffiti Street</li>
                            <li>Art Deco Historic District</li>
                            <li>Coral castle or Zoo</li>
                            <li>Exploring underwater statues and ships</li>
                            <li>Vizcaya Museum and Gardens</li>
                            <li>Jet sky</li>
                            <li>Night cruises</li>
                            <li>Parachute flights</li>
                            <li>Sightseeing tours along the coast.</li>
                        </ul>
                        <h2>Rent luxury autos in Pugachev Company</h2>
                        <p>
                            If you prefer chic chariots then now you can book this. Choose any
                            type of transport: from super <Link to="/">sports cars</Link> to
                            presentable, roomy, and powerful <Link to="/">SUVs</Link>. Our
                            garage offers a wide range of automobiles for any purpose. You
                            will like our choice because we take into account any preferences
                            of modern people. Discuss your conditions and desires with the{" "}
                            <Link to="/">Pugachev Rent Service</Link>
                            manager to satisfy all your requests.
                        </p>
                        <p>
                            Our car rental prices are different, lease a model for $500 or
                            $1,400. The cost depends on internal and external indicators, the
                            number of horsepowers, year of manufacture, capacity, and other
                            criteria. We have diversified our fleet to give you more choice.
                            All our items are in excellent condition, but we re-check them
                            before shipping the customer.
                        </p>
                        <h3>
                            Also, our team offers you other services:
                        </h3>
                        <ul>
                            <li>
                                booking of magnificent apartments in the most exclusive areas
                            </li>
                            <li>
                                <Link to="/">airport transfer</Link> (take and send passengers
                                more comfortable and faster)
                            </li>
                            <li>
                                <Link to="/">personal photographer</Link> and{" "}
                                <Link to="/">private driver</Link>
                            </li>
                            <li>
                                stunning <Link to="/">boat rental</Link> for short walks and
                                long cruises.
                            </li>
                        </ul>
                        <h3>The advantages of our company</h3>
                        <p>
                            Our team will prepare any transport in the shortest possible time
                            and you do not need to wait long for documents. Choose any car
                            from the parking and indicate the rental period, it will be ready
                            in a couple of hours.
                        </p>
                        <p>
                            We will also add other services for a comfortable and fun pastime.
                            Discuss the conditions with our manager to implement any of your
                            ideas.
                        </p>
                        <h4>
                            Profitable cooperation with our company is obvious:
                        </h4>
                        <ul>
                            <li>operational preparation of any chariot</li>
                            <li>large selection of exclusive models</li>
                            <li>regular replenishment of the fleet</li>
                            <li>additional services</li>
                            <li>minimum deposit amount</li>
                            <li>affordable rental price</li>
                            <li>24/7 support</li>
                            <li>verification of technical parameters</li>
                            <li>favorable conditions for regular customers.</li>
                        </ul>
                        <h3>Rental price & conditions</h3>
                        <p>
                            You can rent <Link to="/">Bentley</Link> GTC Mulliner in Miami in
                            our salon, where only 10 minutes after a call, our client becomes
                            the owner of a new luxury car. In our salon, you can find dozens
                            of top-class <Link to="/">sports cars</Link>,{" "}
                            <Link to="">cabriolets</Link>, and other representatives of the
                            aristocratic class. Herewith you don’t need to pay for their total
                            cost, as it is much easier just to rent a luxuriousness.
                        </p>
                        <p>
                            Any customer can get this magnificent racer in just a couple of
                            hours. The leasing price of Bentley GTC Mulliner is very nice –
                            $799. This amount is very beneficial for you if you do not want to
                            buy a car at a market cost of $350,000. Many of our clients are
                            guests of this city, so it is more convenient for them to rent an
                            auto than to buy it. We will surround you with attention to make
                            your pastime bright and positive.
                        </p>
                        <h2>
                            Bentley GTC Mulliner: a detailed review
                        </h2>
                        <p>
                            <Link to="/">Bentley</Link> GTC Mulliner is a rear-wheel-drive
                            luxury sedan, combining a perfect balance of luxuriousness, style,
                            and higher technological capacity. Even now, the version came into
                            the official market and receive a great many favorable reviews
                            from professional critics and ordinary users of the vehicle. In
                            total, there were released several configurations, but we will
                            consider the standard one.
                        </p>
                        <h3>Brand history</h3>
                        <p>
                            Walter Owen Bentley, the founder of this British corporation,
                            showed the first vessel in 1919. He and a group of engineers
                            developed unique cars for racing, and they all became champions.
                            After showing the 8L model, this concern saw successes and
                            failures to rise to the high level of the auto industry again.
                        </p>
                        <p>
                            Some chariots are still called legends and are the dream of many
                            private collectors. Now <Link to="/">Bentley</Link> successfully
                            produces executive class automobiles, but among the brand’s
                            products, there are also <Link to="/">sedans</Link>,{" "}
                            <Link to="/">coupes</Link>, <Link to="/">sports kinds</Link>,{" "}
                            <Link to="/">cabriolets</Link>, and others.
                        </p>
                        <h3>Design innovations</h3>
                        <p>
                            Concerning the appearance of this elite automobile, it undoubtedly
                            arrests attention, but in comparison with other creations of the
                            company the design is quite disputable and at the same time
                            extraordinary. It combines the criteria of elegance, splendor, and
                            attractiveness. I especially want to highlight the front side,
                            which is equipped with four ancestral headlamps, a “marble shield”
                            of the radiator grille, and, of course, an ideal bumper. This
                            time, the designers tried their best to highlight the status of
                            the vehicle.
                        </p>
                        <p>
                            The internal vehicle system is simple, and for this only leather
                            and wood were involved. But even for such simplicity, the trim is
                            done with high quality, and all this is perfectly coupled with the
                            technological part. Even with the naked eye, you can see the
                            presence of many panels and sensors that help in any situation to
                            keep control of the road.
                        </p>
                        <h3>Technical component</h3>
                        <p>
                            Touching on the foregoing of the last section, the sedan is really
                            equipped with many latest systems that assist in any situation.
                            Thus, for example, at the order of <Link to="/">Bentley</Link> GTC
                            Mulliner in Miami, a lane assistant, adaptive cruise control, a
                            night vision system, a projection display, and even a whole set of
                            options for the Bentley City package become available to the
                            driver.
                        </p>
                        <h4>For this time it includes:</h4>
                        <ul>
                            <li>Around view monitor;</li>
                            <li>
                                Nearest signs warning mechanisms regarding speed limits or
                                approaching a dangerous section of the road;
                            </li>
                            <li>
                                An assistant who will notify the user about changes in the
                                situation on the road in the city, pedestrians, and other
                                vehicles behind.
                            </li>
                        </ul>
                        <h3>Interior</h3>
                        <p>
                            An exclusive color range is available now; it consists of several
                            combinations of shades. The main palette of the brand has remained
                            unchanged, but now you will see more lines and unique inserts. Add
                            natural wood and less plastic and you get more elegance. There are
                            several interior finishes, but Breitling watches are still in the
                            center of the console.
                        </p>
                        <h3>Exterior</h3>
                        <p>
                            Our garage is amazing because we have collected the best cars from
                            the world’s leading corporations. Any point will be the perfect
                            choice for any event. Take the gorgeous{" "}
                            <Link to="/">Lamborghini</Link> or the cool
                            <Link to="/">Ferrari</Link> to test their speed on the racetrack.
                            Choose a presentable
                            <Link to="/">Rolls Royce</Link> for a more stylish look. Specify
                            the <Link to="/">Mercedes</Link> model in your order to complement
                            your authentic style. If you like the unique features of the
                            Bentley brand, there are other items in our fleet besides the
                            Bentley GTC Mulliner.
                        </p>
                        <p>
                            If you like the unique features of the <Link to="/">Bentley</Link>{" "}
                            brand, there are other items in our fleet besides the Bentley GTC
                            Mulliner.
                        </p>{" "}
                        <h3>
                            In addition to the already mentioned model, we recommend you to
                            have a look at other brand models:
                        </h3>
                        <ul>
                            <li>
                                <Link to="/">Continental GT</Link>. This two-door model is quite
                                roomy. You will love its great design and ideal technical
                                parameters. Engineers went through all the elements to improve
                                every detail of the interior and exterior.
                            </li>
                            <li>
                                <Link to="/">GTC V8S</Link>. This steel beast looks fantastic.
                                Its convertible type suits this understated style in contrast to
                                the usual sporty designs. Enjoy its capabilities on the track,
                                but also enjoy the increased comfort and respectability of this
                                car.
                            </li>
                            <li>
                                <Link to="/">Bentayaga</Link>. Such an <Link to="/">SUV</Link>{" "}
                                is a great companion on any trip, but you can also take it for a
                                business meeting. You will love the characteristics of this iron
                                beast because it has become more powerful. The first model of
                                the brand that uses diesel.{" "}
                            </li>
                        </ul>
                        <h2>A memorable driving with a chic auto</h2>
                        <p>
                            To find out the individual characteristics of each model in more
                            detail on our official website. If you are ready to make an order,
                            contact us in any way convenient for you. To do this is possible
                            in the appropriate website section. There you can also find
                            conditions of cooperation with us.
                        </p>
                        <p>
                            You can be sure that our company will provide you with quality
                            services because we value our reputation. Our team respects each
                            customer, his time, wishes, and requests. All our clients were
                            satisfied with our assistance, so they came to us again.{" "}
                            <Link to="/">Pugachev Company</Link> makes all your dreams come
                            true.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                {/**
                 * img: static/insta_big.jpg
                 */}
            </section>
        </>
    );
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
