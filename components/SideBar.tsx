export const SideBar = () => {
  return (
    <div className="ml-5p pt-3p pl-2p h-full w-23p bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        <li key="home">ホーム</li>
        <li key="menu">メニュー</li>
        <li key="order">注文状況</li>
        <li key="sales">売上解析</li>
        <li key="shift">シフト</li>
        <li key="user">ユーザー管理</li>
        <li key="audit">監査ログ</li>
        <li key="settings">設定</li>
      </ul>
    </div>
  );
};
