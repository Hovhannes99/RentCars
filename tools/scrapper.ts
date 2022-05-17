import * as React from "react"
import { load } from "cheerio";
import { link, readFile, writeFileSync } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);
type Infer<T> = T extends Array<infer R> ? R : T;
type Root = ReturnType<typeof load>["root"];
type CheerioElement = Infer<ReturnType<ReturnType<Root>["toArray"]>>;
type Cheerio<T = CheerioElement> = T extends { tagName: string } ? T : never;

const asHtml = (assetPath: string) =>
  readFileAsync(`${__dirname}/assets/${assetPath}`).then((html) =>
    html.toString().toString()
  );

const linkFromRef = (
  element: CheerioElement,
  regex: RegExp,
  formatLink?: (l: string) => string
) => {
  const aTag = element as unknown as Cheerio;
  return {
    slug: removeTrailFromSlug(
      regex,
      (formatLink && formatLink(aTag.attribs["href"])) || aTag.attribs["href"]
    ),
    title: aTag.children[0]["data"],
  };
};

const fullPugachev = (path: string) => `https://pugachev.miami${path}`;

const BETWEEN_TRAIL = /\/(.*)\//;
const START_TRAIL = /\/(.*)/;

const removeTrailFromSlug = (regex: RegExp, url: string) =>
  new URL(url).pathname.match(regex)[1];

const carParser = ($: ReturnType<typeof load>) => (carId: string) => {
  const car$ = $(`article.post-entry-${carId}`);

  return {
    slug: removeTrailFromSlug(
      BETWEEN_TRAIL,
      car$.find("a").first().attr("href")
    ),
    coverImage: {
      src: removeTrailFromSlug(
        START_TRAIL,
        car$.find("a > img").attr("data-src") ||
          car$.find("a > img").attr("src")
      ),
      alt: car$.find("a > img").attr("alt"),
    },
    title: car$.find("h3 a").text(),
    category: car$
      .find(".blog-categories.minor-meta a")
      .map((_, e: any) => linkFromRef(e, BETWEEN_TRAIL))
      .toArray(),
    price: Number(
      car$
        .find(".slide-entry-excerpt")
        .get(0)
        .children[0]["data"].trim()
        .slice(1)
    ),
    isSpecialOffer: !!car$.find(".special_of").text(),
    jsonLd: {
      publisher: {
        name: car$
          .find("span.hidden")
          .find("span[itemprop='publisher']")
          .children('span[itemprop="name"]')
          .text(),
        logoSlug: removeTrailFromSlug(
          START_TRAIL,
          car$
            .find("span.hidden")
            .find("span[itemprop='publisher']")
            .find('span[itemprop="url"]')
            .text()
        ),
      },
      author: {
        name: car$
          .find("span.hidden")
          .find("span[itemprop='author']")
          .children('span[itemprop="name"]')
          .text(),
      },
      datePublished: car$
        .find("span.hidden")
        .find("span[itemprop='datePublished']")
        .text(),
      dateModified: car$
        .find("span.hidden")
        .find("span[itemprop='dateModified']")
        .text(),
      mainEntityOfPage: car$
        .find("span.hidden")
        .find("span[itemprop='mainEntityOfPage']")
        .text(),
    },
  };
};

async function run() {
  const pugachevPageHtml = await asHtml("pugachev.html");

  const $ = load(pugachevPageHtml);
  const pugachevParser = carParser($);
  const cars = $("article.post-entry")
    .toArray()
    .map(
      (e) =>
        (e as Cheerio).attribs["class"]
          .split(" ")
          .map((clz) => clz.trim())
          .find((x) => x.startsWith("post-entry-"))
          .split("-")[2]
    )
    .map((pugachevCarId) => pugachevParser(pugachevCarId));

  const content1 = {
    iframe: $(".avia_textblock.div_video_gl_22 iframe.video_glav22").attr(
      "data-src"
    ),
    html: await asHtml("section1.txt"),
  };

  const content2 = {
    iframe: $("#av_section_2 div.avia_textblock iframe.video_glav22").attr(
      "data-src"
    ),
    html: await asHtml("section2.txt"),
    gmb: {
      link: $("#after_section_2 a").attr("href"),
      title: $("#after_section_2 a").text(),
    },
  };

  const content3 = {
    instagram: {
      link: $("#av_section_3 a").attr("href"),
      image: removeTrailFromSlug(
        START_TRAIL,
        fullPugachev($("#av_section_3 img").attr("data-src"))
      ),
    },
  };

  const contactUs = {
    address: {
      title: "2201 Collins Ave, Miami Beach, FL 33139",
      link: "https://g.page/pugachevLuxuryCarRental?sharedata=!4m5!3m4!1s0x0:0x5873c3f6836487d1!8m2!3d26.022063!4d-80.1436",
    },
    gmb: {
      title: "Google My Business",
      link: "https://g.page/pugachevLuxuryCarRental?we",
    },
    hoursOfOperation: "08:00AM – 09:30PM",
    email: {
      title: "rentals@pugachev.miami",
      link: "mailto:rentals@pugachev.miami",
    },
    phone: {
      title: "786.859.7876",
      link: "tel:786.859.7876",
    },
    whatsApp: {
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=17866595011",
    },
  };

  const social = {
    instagram: {
      link: "https://www.instagram.com/pugachev.miami/",
      image: "https://pugachev.miami/wp-content/uploads/2019/03/s3.png",
    },
    facebook: {
      link: "https://www.facebook.com/pugachevluxurycarrental/",
      image: "https://pugachev.miami/wp-content/uploads/2019/03/s1.png",
    },
    twitter: {
      link: "https://twitter.com/pugachevservice",
      image: "https://pugachev.miami/wp-content/uploads/2019/03/s2.png",
    },
    youtube: {
      link: "https://www.youtube.com/channel/UC2wU1bOOSnmnGgKTEkRSnCA",
      image: "https://pugachev.miami/wp-content/uploads/2019/03/s5.png",
    },
  };

  const footer = {
    categoryCars: $("#av_section_4 ul.ul_st_gl2")
      .first()
      .children("li")
      .find("a")
      .toArray()
      .map((e) => linkFromRef(e, BETWEEN_TRAIL, fullPugachev)),
    popularCars: $("#av_section_4 ul.ul_st_gl3")
      .first()
      .children("li")
      .find("a")
      .toArray()
      .map((e) => linkFromRef(e, BETWEEN_TRAIL, fullPugachev)),
    locations: $("#av_section_4 ul.ul_st_gl2")
      .first()
      .parent()
      .next()
      .next()
      .find("li > a")
      .toArray()
      .map((e) => linkFromRef(e, START_TRAIL)),
  };

  const header = {
    logo: "https://pugachev.miami/wp-content/uploads/2019/03/logo-with-text-silver-2.png",
    nav: $("#avia-menu")
      .children("li")
      .not(":first")
      .map((_, e) => ({
        title: $(e).children("a").find("span.avia-menu-text").text(),
        slug: $(e).children("a").attr("href"),
        menu: $(e)
          .children("ul")
          .children("li")
          .children("a")
          .filter(
            (_, ec) => new URL((ec ?? this).attribs["href"]).pathname !== "/"
          )
          .map((_, ec) => {
            return {
              slug: removeTrailFromSlug(
                BETWEEN_TRAIL,
                (ec ?? this).attribs["href"]
              ),
              title: $(ec).find("span.avia-menu-text").text(),
            };
          })
          .toArray(),
      }))
      .toArray()
      .slice(0, 6),
  };

  writeFileSync(
    "pugachev.json",
    JSON.stringify({
      header,
      cars,
      content1,
      content2,
      content3,
      contactUs,
      social,
      footer,
    })
  );
}

run();
