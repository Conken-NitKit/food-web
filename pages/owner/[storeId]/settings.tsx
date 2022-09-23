import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { FeatureLayout } from "../../../components/layouts";
import {
  SettingLinkItem,
  SettingLinkItemProps,
  SettingSwitchItem,
  SettingSwitchItemProps,
} from "../../../components/SettingItem";

const SETTING_CONTENTS: (
  | (Omit<SettingLinkItemProps, "className"> & { type: "link" })
  | (Omit<SettingSwitchItemProps, "className"> & { type: "switch" })
)[] = [
  {
    type: "switch",
    label: "ショップの公開 / 非公開",
    description: "ショップの公開状態を変更することができます",
    onLabel: "公開中",
    offLabel: "非公開",
  },
  {
    type: "link",
    label: "利用規約",
    to: "xxx",
  },
  {
    type: "link",
    label: "プライバシーポリシー",
    to: "xxx",
  },
  {
    type: "link",
    label: "お問合せ",
    to: "xxx",
  },
  {
    type: "link",
    label: "ログアウト",
    to: "/api/auth/signout/",
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      signOut();
    },
  },
];

const Settings: NextPage = () => {
  return (
    <FeatureLayout type="settings">
      <nav>
        <ul>
          {SETTING_CONTENTS.map((content) =>
            content.type === "link" ? (
              <SettingLinkItem
                key={content.label}
                className="border-b border-secondary-regular px-1 py-4 hover:opacity-50"
                {...content}
              />
            ) : (
              <SettingSwitchItem
                key={content.label}
                className="border-b border-secondary-regular px-1 py-4 hover:opacity-50"
                {...content}
              />
            )
          )}
        </ul>
      </nav>
    </FeatureLayout>
  );
};

export default Settings;
