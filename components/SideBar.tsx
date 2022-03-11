import Link from "next/link";

export const SideBar = () => {
  return (
    <div className="ml-5p pt-3p pl-2p h-full w-23p bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul className="mt-13p">
        <li key="home">
          <Link href="/home">
            <p>ホーム</p>
          </Link>
        </li>
        <li key="menu">
          <Link href="/menu">
            <p>メニュー</p>
          </Link>
        </li>
        <li key="order">
          <Link href="/order">
            <p>注文状況</p>
          </Link>
        </li>
        <li key="shift">
          <Link href="/shift">
            <p>シフト</p>
          </Link>
        </li>
        <li key="user">
          <Link href="/user">
            <p>ユーザー管理</p>
          </Link>
        </li>
        <li key="audit">
          <Link href="/audit">
            <p>監査ログ</p>
          </Link>
        </li>
        <li key="settings">
          <Link href="/settings">
            <p>設定</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
