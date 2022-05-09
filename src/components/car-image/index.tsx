import {
  GatsbyImage, getImage,
  IGatsbyImageData
} from "gatsby-plugin-image";
import { VFC } from "react";

interface Props {
  title: string;
  image: IGatsbyImageData;
  className?: string;
}
export const CarImage: VFC<Props> = ({ image, title, className }) => (
  <GatsbyImage
    className={className}
    image={getImage(image)}
    alt={title}
  />
);
