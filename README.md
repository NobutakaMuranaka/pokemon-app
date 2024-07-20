## 参考
* https://www.udemy.com/course/react-3project-app-udemy/
* https://qiita.com/hato_code/items/e75f215ef2d5191341dc

## 学んだこと
* npmコマンドをよく使っているが、それが何か、何があるのかはpackage.jsonを見れば分かる。
* ヘッダーはコンポーネント化でOK。
* API連携するときにはawait、asyncを使うことを考える。
* APIの叩き方（Promiseを使ったデータフェッチング）を学んだ。
* Promise（非同期処理）についてメモ:
API取得やDB接続は開発者やユーザーでは保証できない。
成功（resolve）と失敗（reject）の2パターンを想定する必要がある。
thenメソッドに処理内容を書く（成功時の非同期処理）。
catchメソッドにはエラー処理を書く（失敗時の非同期処理）。
* App.jsのreturn内に書いたpokemonはprops。Card.jsxで{pokemon.〇〇}と使っている。
* まずはハードコーディングで仮のデータを用意して、propsを親から子へ受け渡すと良い。
* 三項演算子でロード中かどうかを表示切り替え:
```
jsx
コードをコピーする
{loading ? (
  <h1>ロード中・・・</h1>
) : (
  // 他の表示内容
)}
```
* ステートの定義はコンポーネント内で行う必要がある。
