import { pickExtensionFromFileName } from './pickExtensionFromFileName';

describe(pickExtensionFromFileName, () => {
  it('拡張子を抽出', () => {
    const result = pickExtensionFromFileName('test.ts');
    expect(result).toBe('ts');
  });
});
