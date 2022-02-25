<!-- https://github.com/Conken-NitKit/github-template-example/blob/main/.github/PULL_REQUEST_TEMPLATE.md?plain=1 より -->

## 概要

<!-- 今回のPRの 実装内容 & 変更するに至った背景 を記載してください。 -->

## デバッグ項目

<!--
実装に不具合がないことを確認するために行った項目です。

- [ ] 入力例 1
- [ ] 入力例 2
-->

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

- [ ] `data`, `info`, `value` などの汎用的で抽象度の高い変数名を使っていない → <a href="https://neos21.net/blog/2020/01/28-01.html" target="_blank" rel="noopener noreferrer">参考</a>
- [ ] 配列には末尾に `s` をつけて複数形にするか `xxxList` と命名することで配列であることを明確にしている → <a href="https://teratail.com/questions/161176" target="_blank" rel="noopener noreferrer">参考</a>
- [ ] マジックナンバーは極力存在せず、定数を用いて表現されている → <a href="https://twitter.com/program_shiba/status/1483378634975072260" target="_blank" rel="noopener noreferrer">参考</a>
- [ ] パッと見で何をやってるかわからないような処理の結果を **説明変数** している → <a href="https://wb-hp.com/blog/2020/11/09/explanatory-variable.html" target="_blank" rel="noopener noreferrer">参考</a>
- [ ] 複雑な条件式の結果を **要約変数** を適用している → <a href="https://twitter.com/hakuto00/status/1362608154840760320" target="_blank" rel="noopener noreferrer">参考</a>

### 共通 (処理系)

<a href="" target="_blank">参考</a>

- [ ] **早期リターン（ガード節）** を適用することで条件分岐の簡略化している → <a href="https://zenn.dev/media_engine/articles/early_return" target="_blank">参考</a>
- [ ] if 文では「調査対象」を左側に、「比較対象」を右側に配置している → <a href="https://twitter.com/yuuuma_11/status/1347374986160340992/photo/2" target="_blank">参考</a>
- [ ] 値のパターンによって分岐する場合は `is/else文` ではなく、`switch文` を使う → <a href="https://blog.senseshare.jp/if-switch.html" target="_blank">参考</a>

### 共通 (コメント系)

- [ ] コメントには適切なアノテーションコメントが記載されている → [参考](https://qiita.com/taka-kawa/items/673716d77795c937d422)

### 共通 (その他)

- [ ] フォーマット差分などは PR 上に一言 `インラインコメント` を付けて、レビュワーが省エネできるように → [参考](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
