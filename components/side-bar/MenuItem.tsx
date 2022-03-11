import Link from "next/link";

interface Props {
  href: string;
  img: JSX.IntrinsicElements;
  name: string;
}

export const MenuItem = ({ href, img, name }: Props) => {
  return (
    <li key={href}>
      <Link href={href}>
        <p>
          {img}
          {name}
        </p>
      </Link>
    </li>
  );
};
