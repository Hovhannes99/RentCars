import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  title: string;
  image: IGatsbyImageData;
  className?: string;
}
export const ImageCard = ({ image, title, className }: Props) => (
  <GatsbyImage  className={className} image={getImage(image)} alt={title}/>
);
