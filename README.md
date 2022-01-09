# この残念な拡張について

例えば関数 foo をテストしたいとき
同じフォルダに foo.test.ts を作って出力したい

```ts
// foo.ts
export function foo() {
  return 'bar';
}

// foo.test.ts
import { foo } from './foo';

describe(foo, () => {
  it('should return bar', () => {
    const result = foo();
    expect(result).toBe();
  });
});
```
