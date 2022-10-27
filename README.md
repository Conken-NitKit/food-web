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

以下 food-web（仮）のコーディングルールを追記します。不明な点は[平田](https://github.com/Umiteru2004)まで。

## 環境構築手順

1. 作業用フォルダを用意。

1. 作業用フォルダで`git clone git@github.com:Conken-NitKit/food-web.git`

1. 以下のコマンドを上から順に実行。

   1. `cd food-web`

   1. `yarn install`

1. VScode の拡張機能`ESlint`をインストール。 [[参考]](https://drive.google.com/file/d/1oPZpg67sT3jeqDCns6ZR924q-cXADhHE/view?usp=sharing)

## コミットメッセージ

- コミットメッセージは`タイトル: 詳細`の形式

- タイトルは次のいずれか [参考](https://qiita.com/itosho/items/9565c6ad2ffc24c09364)

| タイトル | コミット内容               |
| -------- | -------------------------- |
| add      | 機能・ファイル等の追加     |
| fix      | バグ等の修正               |
| update   | 機能等修正（バグではない） |
| rename   | ファイル・変数等の改名     |
| move     | ファイル・フォルダの移動   |
| remove   | ファイル・コード等の削除   |
| readme   | README の追記              |

## 型指定

- 定数・変数は基本的に全て型を明示的に指定する。

- ページコンポーネントの型は `: NextPage` とする。

- ページコンポーネント以外のコンポーネントの型は `() => JSX.Element` とする。

## CSS

- 極力、HTML 要素の大きさを画面の大きさに対して相対指定しないこと。（具体的には、極力 vw、vh を使わないこと。また、画面直下の要素、または直接・間接問わず、大きさを画面の大きさに対して相対指定した要素の子要素について、大きさを%で指定しないこと。）

- 要素の大きさは、tailwind にデフォルトで用意された([参考](https://tailwindcss.jp/docs/responsive-design))、表のブレイクポイントについてレスポンシブ対応すること。ただし、sm は`sm:`とせず基準のスタイルとすること。また、大きさは、[Figma](https://www.figma.com/file/xRETNoeIAtd6L5akb6KOsK/Food?node-id=12%3A286)の値に表の倍率をかけて求めること。

  ※ 例えば、Figma で width が 100px の要素の w は、`"w-10 md:w-12 lg:w-16 xl:w-20 2xl:w-24"`となる。

| ブレイクポイント | min-width | 倍率    |
| ---------------- | --------- | ------- |
| sm               | 640px     | 0.4 倍  |
| md               | 768px     | 0.48 倍 |
| lg               | 1024px    | 0.64 倍 |
| xl               | 1280px    | 0.8 倍  |
| 2xl              | 1536px    | 0.96 倍 |

- CSS は、基本的に display, position, top/bottom/right/left, m, border, p, w, h の順で記述する。

## 命名ルール

### ブランチ

- ケバブケース

- ブランチ名は右の形式: `タイトル/詳細`

|                                            | タイトル                                                            | 詳細                         |
| ------------------------------------------ | ------------------------------------------------------------------- | ---------------------------- |
| **コンポーネントを作成するブランチの場合** | 作成するコンポーネントを含む`/`ディレクトリ直下のディレクトリの名前 | 作成するコンポーネントの名前 |
| **不具合を修正するブランチの場合**         | `"fix"`                                                             | 修正箇所                     |

例:

- `pages/home`（`Home`コンポーネントの作成）
- `components/basic-layout`（`basicLayout`コンポーネントの作成）
- `fix/home-bg`（`Home`コンポーネントの背景の不具合の修正）

### ファイル

- 各ページのファイル名は`/constants/menusItems.ts`の`MENUS_ITEMS`の各`id`を想定している。

## コンポーネントの使い方

### BasicLayout

- `<BasicLayout type="(ページファイル名)">(JSX)</BasicLayout>`として、()内を編集してページファイルで使用する。

### FeatureLayout

- `<FeatureLayout type="(ページファイル名)">(JSX)</FeatureLayout>`として、()内を編集してページファイルで使用する。

- 基本的にホームページ、管理系ページ（ページタイトルの下に短い説明文があるページ）以外の全てのページで使用する。

### tab-components

- 以下の形で使用することを想定している。

```tsx
import {
  CategoryMenuItems,
  CategoryUl,
} from "../components/tab-components";

const CATEGORIES: Record<
  カテゴリIDの型,
  { id: カテゴリIDの型; name: string }
> = {…}

const カテゴリメニューがあるページコンポーネント: NextPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<カテゴリIDの型>("初期値");

  const createCategoryClickHandler = useCallback((id: カテゴリIDの型) => {
    return () => {
      setSelectedCategory(id);
    };
  }, []);

  return (
    …
      <CategoryUl>
        {Object.values(CATEGORIES).map((category) => (
          <li
            key={category.id}
            onClick={createCategoryClickHandler(category.id)}
            className="mr-5 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-12 h-full cursor-pointer"
          >
            <CategoryMenuItems
              categoryName={category.name}
              isSelected={selectedCategory === category.id}
            />
          </li>
        ))}
      </CategoryUl>
    …
  );
};
```

## ローカルで認証機能を ON にする。

> 認証機能を常時有効にすると大変なので、原則 OFF にしてください。

STEP1:
`yarn expose` コマンドを実行し、 PC のローカルホストに Auth0 側からアクセス可能にする。
(この際に発行される URL はサーバーの状況によりランダムに決定します)

```
$ yarn expose
yarn run v1.22.19
$ lt --port 3000 --subdomain food-web
your url is: https://food-web.loca.lt
```

STEP2:
環境変数を書き換えて、以下のように書き換える。

- Auth0 に送信する Callback URL が STEP1 で発行したものと同じになるようにする。
- 認証機能を有効にする。

```diff
 AUTH0_CLIENT_ID=YOUR_CLIENT_ID
 AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
 AUTH0_ISSUER=YOUR_CLIENT_ISSUER
 NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
+NEXTAUTH_URL=https://food-web.loca.lt
-NEXT_PUBLIC_NO_AUTH=false
+NEXT_PUBLIC_NO_AUTH=false
 NEXT_PUBLIC_IS_DEBUG=true
```

STEP3:
auth0 の管理画面にいき、 STEP1 で発行された URL を `Application URIs` の項目に記載する。
(権限が必要なので、変更を行いたい場合は [窪田さん](https://github.com/kubo-hide-kun) に連絡ください)

[auth0 の設定](https://user-images.githubusercontent.com/41711771/192577425-de54beb5-3545-4da6-b465-4ee65ca70551.png)

## その他

- 全ての Pull Request の Reviewers には必ず[窪田](https://github.com/kubo-hide-kun)と[平田](https://github.com/Umiteru2004)を含めること。

- push の前には必ず`git pull origin develop`すること。
