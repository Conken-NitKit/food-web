This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

以下 food-web（仮）の留意事項を追記します。ここに書くべきかはわかりません笑 必要に応じて移動します。

## 環境構築手順

1. 作業用フォルダを用意。

1. 作業用フォルダで`git clone git@github.com:Conken-NitKit/food-web.git`

1. `cd food-web`

1. `yarn install`が必要かも知れない。

1. `yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`

1. `yarn add -D eslint-plugin-tailwindcss`

1. `yarn add classnames`

1. VScode の拡張機能`ESlint`をインストール。 [[参考]](https://drive.google.com/file/d/1oPZpg67sT3jeqDCns6ZR924q-cXADhHE/view?usp=sharing)

1. `food-web/.env`を作成。内容は[平田海輝](https://github.com/Umiteru2004)に申請。

## コミットメッセージ

コミットメッセージは`タイトル: 詳細`の形式

タイトルは次のいずれか [参考](https://qiita.com/itosho/items/9565c6ad2ffc24c09364)

| タイトル | コミット内容               |
| -------- | -------------------------- |
| add      | 機能・ファイル等の追加     |
| fix      | バグ等の修正               |
| update   | 機能等修正（バグではない） |
| rename   | ファイル・変数等の改名     |
| move     | ファイル・フォルダの移動   |
| remove   | ファイル・コード等の削除   |
| style    | スタイリング               |
| readme   | README の編集              |

## ブランチ命名法

`ファイル名`: そのブランチで作業するファイルの名前
`種類名`: `ファイル名`のファイルを含む`/`ディレクトリ内のディレクトリの名前

- ブランチ名は以下の形式
  : `種類名/ファイル名`

- ケバブケース

例:
`pages/index`

## ファイル命名法

## コンポーネント使用法

- 各ページのファイル名は`/components/Layout.tsx`の`MENUS_ITEMS`の各`id`を想定している。

### BasicLayout

- `<BasicLayout type="[ページコンポーネント名]">{children}<BasicLayout />`として使用する。
