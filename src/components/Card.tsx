import * as React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  title: string;
  image: IGatsbyImageData;
  className?: string;
}
// @ts-ignore
export const ImageCard = ({ image, title, className }: Props) => (
  <GatsbyImage  className={className} image={getImage(image)} alt={title}/>
);
