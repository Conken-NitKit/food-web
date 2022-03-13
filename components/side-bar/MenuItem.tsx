import Link from "next/link";

interface Props {
  href: string;
  name: string;
}

export const MenuItem = ({ href, name }: Props) => {
  return (
    <li key={href}>
      <Link href={href}>
        <p>{name}</p>
      </Link>
    </li>
  );
};
