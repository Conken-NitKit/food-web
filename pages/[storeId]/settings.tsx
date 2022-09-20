import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { FeatureLayout } from "../../components/layouts";
import {
  SettingLinkItem,
  SettingLinkItemProps,
  SettingSwitchItem,
} from "../../components/SettingItem";
import { useToggle } from "../../hooks/useToggle";

const SETTING_CONTENTS: Omit<SettingLinkItemProps, "className">[] = [
  {
    label: "利用規約",
    to: "xxx",
  },
  {
    label: "プライバシーポリシー",
    to: "xxx",
  },
  {
    label: "お問合せ",
    to: "xxx",
  },
  {
    label: "ログアウト",
    to: "/api/auth/signout/",
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      signOut();
    },
  },
];

const Settings: NextPage = () => {
  const [isPublish, togglePublishState] = useToggle();
  return (
    <FeatureLayout type="settings">
      <nav>
        <ul>
          <SettingSwitchItem
            className="border-b border-secondary-regular px-1 py-4 hover:opacity-50"
            label="ショップの公開 / 非公開"
            description="ショップの公開状態を変更することができます"
            onLabel="公開中"
            offLabel="非公開"
            checked={isPublish}
            onClick={togglePublishState}
          />
          {SETTING_CONTENTS.map((content) => (
            <SettingLinkItem
              className="border-b border-secondary-regular px-1 py-4 hover:opacity-50"
              {...content}
            />
          ))}
        </ul>
      </nav>
    </FeatureLayout>
  );
};

export default Settings;
