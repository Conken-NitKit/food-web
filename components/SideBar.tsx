import Image from "next/image";
import Link from "next/link";

import home from "../assets/img/home.svg";

export const SideBar = () => {
  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul className="mt-13p">
        <li key="home">
          <Link href="/home">
            <p>
              <Image width={100} height={100} src={home} />
              ホーム
            </p>
          </Link>
        </li>
        <li key="menu">
          <Link href="/menu">
            <p>
              <Image width={100} height={100} src={home} />
              メニュー
            </p>
          </Link>
        </li>
        <li key="order">
          <Link href="/order">
            <p>
              <Image width={100} height={100} src={home} />
              注文状況
            </p>
          </Link>
        </li>
        <li key="shift">
          <Link href="/shift">
            <p>
              <Image width={100} height={100} src={home} />
              シフト
            </p>
          </Link>
        </li>
        <li key="user">
          <Link href="/user">
            <p>
              <Image width={100} height={100} src={home} />
              ユーザー管理
            </p>
          </Link>
        </li>
        <li key="audit">
          <Link href="/audit">
            <p>
              <Image width={100} height={100} src={home} />
              監査ログ
            </p>
          </Link>
        </li>
        <li key="settings">
          <Link href="/settings">
            <p>
              <Image width={100} height={100} src={home} />
              設定
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
