# 駒場祭用のページを作る！
[実際のページ](https://ut-engineering-society.github.io/komabasai-2023/)

## ルール
- mainブランチでは作業しない！

### Git関連
- まず、`git checkout -b <ブランチ名>` でブランチを切る
- 編集します
- 次に、 `git add .` で編集をステージに上げる（gitにどのファイルを編集をcommitするか伝える）
- 次に、 `git commit -m "<コミットメッセージ>"` で ローカルにコミット
- 次に、 `git push origin <ブランチ名>` でリモートにプッシュ
- GitHub上で pull request
- 問題なければそのまま merge
- ローカルで `git checkout main` で main ブランチに戻る
- `git pull` で最新の main をローカルに反映
- 最初へ。

## ページ構成・設計
### main
- タイトル（できたら画像付き）
- 団体紹介（一旦山本さんのをコピーしてもらえればあとで整えます）
- ゲーム紹介
 -  @zuisho は [マインスイーパー](https://zuisho-1848-o.github.io/game-world/games/mineSweeper/) をスクショとタイトルつけて置いておいてください
 - あとで、 @taka7393 さんのを追加します。
- 活動報告
 - @zuisho  のと木下さんのと @shinchan3673 
- footer は適当に団体名入れておけばOK!

### header
@zuisho

## 参考
- [5月祭のGitHub](https://github.com/ut-engineering-society/may-fes)
- [5月祭ページ](https://ut-engineering-society.github.io/may-fes/)

