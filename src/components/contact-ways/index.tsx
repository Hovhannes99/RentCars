import  { FC, VFC } from "react";

interface Props {
  className?: string;
  bold?: boolean;
}

const ContactWay: FC<Props & { text: string; link: string }> = ({
  bold,
  children,
  className,
  link,
  text,
}) => (
  <a href={link} className={className}>
    {children}
    {bold && <strong>{text}</strong>}
    {!bold && text}
  </a>
);

export const Phone: VFC<Props & { withIcon?: boolean; animate?: boolean }> = ({
  withIcon,
  animate,
  ...contactProps
}) => (
  <ContactWay text="786.859.7876" link="tel:786-859-7876" {...contactProps}>
    <span className="sr-only">786-859-7876</span>
    {withIcon && (
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
      </svg>
    )}
  </ContactWay>
);

export const WhatsApp: VFC<Props & { text?: string }> = ({
  text,
  ...props
}) => (
  <ContactWay
    link="https://api.whatsapp.com/send?phone=17866595011"
    text={text || "WhatsApp"}
    {...props}
  />
);

export const Telegram: VFC<Props & { text?: string }> = ({
  text,
  ...props
}) => (
  <ContactWay
    link="https://teleg.run/PugachevServiceTeam"
    text={text || "Telegram"}
    {...props}
  />
);

export const Instagram: VFC<Props & { text?: string }> = ({
  text,
  ...props
}) => (
  <ContactWay
    link="https://www.instagram.com/pugachevmark"
    text={text || "instagram"}
    {...props}
  />
);
