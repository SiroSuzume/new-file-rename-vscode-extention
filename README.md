# この残念な拡張について

自分が単体テストを書く際は、最初に適当なコードを書いた後、スニペットを使ってすぐ後ろに`describe(foo, () =>)`、のようなテストを書いてしまう。
この describe を`Refactor -> move to a new file`を使って、新しいファイルに切り出しちゃう。
このとき、ファイル名が`newFile.ts`で固定されてしまうので、`foo.test.ts`にリネームしてしまいたいのだが、その手間がなんだかもったいない。マクロ的なものだけれど、試しにやってみる

```ts
// foo.ts
export function foo() {
  return 'bar';
}

// newFile.ts これを foo.test.tsにリネームしてしまう拡張
describe(foo, () => {
  it('should return bar', () => {
    const result = foo();
    expect(result).toBe();
  });
});
```
