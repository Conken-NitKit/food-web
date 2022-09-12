<!-- https://github.com/Conken-NitKit/github-template-example/blob/main/.github/PULL_REQUEST_TEMPLATE_REACT.md より -->

## 概要

<!-- 今回のPRの 実装内容 & 変更するに至った背景 を記載してください。 -->

## デバッグ項目

<!--
実装に不具合がないことを確認するために行った項目です。

- [ ] 入力例 1
- [ ] 入力例 2
-->

- [ ] コンソールに警告はありません。
- [ ] 外観に大きな違和感はありません。

## スクリーンショット

<!--
実際にどのような表示かの写真を貼り付ける項目です。
動画の場合は下記の表を消して、[この記事](https://zenn.dev/naminodarie/articles/27f9c260fd81fd)を参考に動画を追加してください。
-->

|             Before              |              After              |
| :-----------------------------: | :-----------------------------: |
| <img width="450" alt="" src=""> | <img width="450" alt="" src=""> |

## 参考 URL

<!--
参考にした記事があれば、そのURLを記載してください。

- 参考にしたURL 1
- 参考にしたURL 2
-->

## Self-Checking points 🚨

レビューを依頼する前に必ず確認してほしいポイントです。
一般的な項目を上げているので、プロジェクト毎に必要なポイントがあれば各リポジトリで追加してください。

### 共通 (命名)

- [ ] `data`, `info`, `value` などの汎用的で抽象度の高い変数名を使っていない → [参考](https://neos21.net/blog/2020/01/28-01.html)
- [ ] 配列には末尾に `s` をつけて複数形にするか `xxxList` と命名することで配列であることを明確にしている → [参考](https://teratail.com/questions/161176)
- [ ] マジックナンバーは極力存在せず、定数を用いて表現されている [参考](https://twitter.com/program_shiba/status/1483378634975072260)
- [ ] パッと見で何をやってるかわからないような処理の結果を **説明変数** している → [参考](https://wb-hp.com/blog/2020/11/09/explanatory-variable.html)
- [ ] 複雑な条件式の結果を **要約変数** を適用している → [参考](https://twitter.com/hakuto00/status/1362608154840760320)

### 共通 (処理系)

- [ ] **早期リターン（ガード節）** を適用することで条件分岐の簡略化している → [参考](https://zenn.dev/media_engine/articles/early_return)
- [ ] if 文では「調査対象」を左側に、「比較対象」を右側に配置している → [参考](https://twitter.com/yuuuma_11/status/1347374986160340992/photo/2)
- [ ] 値のパターンによって分岐する場合は `is/else文` ではなく、`switch文` を使う → [参考](https://blog.senseshare.jp/if-switch.html)

### 共通 (コメント系)

- [ ] コメントには適切なアノテーションコメントが記載されている → [参考](https://qiita.com/taka-kawa/items/673716d77795c937d422)

### JavaScript (命名)

- [ ] 変数名, 関数名, プロパティ名 は `ローワーキャメルケース` になっている → [参考](https://qiita.com/RyosukeSomeya/items/90f8e780b37c53758276)
- [ ] クラス名, オブジェクト名 は `パスカルケース` になっている → [参考](https://qiita.com/RyosukeSomeya/items/90f8e780b37c53758276)
- [ ] 定数名は `スネークケース` になっている → [参考](https://qiita.com/RyosukeSomeya/items/90f8e780b37c53758276)

### JavaScript (処理系)

- [ ] 変数の宣言には極力を `const` を利用している → [参考](https://qiita.com/cheez921/items/7b57835cb76e70dd0fc4)
- [ ] 文字列の合成にはテンプレートリテラルを利用している → [参考](https://qiita.com/kitamuwork/items/6830c1fe2399f35fce8d)
- [ ] ループ処理は `通常for文`, `for-in`, `forEach` などは極力利用せず、高階関数を利用している → [参考](https://qiita.com/may88seiji/items/8f7e42353b6904af5e9a)
- [ ] `==(等価演算子)` は使わず `===(厳密等価演算子)` を利用している → [参考](https://code-graffiti.com/equality-operators-in-javascript/)

### TypeScript (命名)

- [ ] インターフェース, タイプ, Enum の命名は `パスカルケース` になっている → [参考](https://typescript-jp.gitbook.io/deep-dive/styleguide)

### React (処理系)

- [ ] コンポーネントの変数名は `パスカルケース` になっている → [参考](https://qiita.com/RyosukeSomeya/items/90f8e780b37c53758276)
- [ ] イベント処理のロジックは JSX 内に直接かかず、コールバック関数として JSX 外で定義する → [参考](https://qiita.com/baby-degu/items/ea4eede60bbe9c63a348#5-%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E5%86%85%E3%81%A7%E9%96%A2%E6%95%B0%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%AA%E3%81%84)
- [ ] コンポーネントに子要素がない場合は **自己終了タグ** を利用する → [参考](https://qiita.com/baby-degu/items/ea4eede60bbe9c63a348#19-%E8%87%AA%E5%B7%B1%E7%B5%82%E4%BA%86%E3%82%BF%E3%82%B00)
- [ ] attribute にブール値を直接記載する場合は省略形を利用する → [参考](https://qiita.com/baby-degu/items/ea4eede60bbe9c63a348#1-jsx%E3%81%AE%E7%9C%81%E7%95%A5%E5%BD%A2%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)
- [ ] attribute に文字列を直接記載する場合は波括弧を利用しない → [参考](https://qiita.com/baby-degu/items/ea4eede60bbe9c63a348#9-%E6%96%87%E5%AD%97%E5%88%97%E5%B1%9E%E6%80%A7%E3%81%AB%E6%B3%A2%E6%8B%AC%E5%BC%A7%E3%81%AF%E4%B8%8D%E8%A6%81)

### 共通 (その他)

- [ ] フォーマット差分などは PR 上に一言 `インラインコメント` を付けて、レビュワーが省エネできるように → [参考](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
