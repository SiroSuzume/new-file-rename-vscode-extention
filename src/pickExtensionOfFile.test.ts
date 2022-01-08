import { pickExtensionOfFile } from './pickExtensionOfFile';

describe(pickExtensionOfFile, () => {
  it('拡張子を抽出', () => {
    const result = pickExtensionOfFile('test.ts');
    expect(result).toBe('ts');
  });
});
