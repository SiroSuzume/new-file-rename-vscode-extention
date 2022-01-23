import { buildImportFromBaseFile } from './buildImportFromBaseFile';

export function buildDescribeFromFunctionName(
  functionName: string,
  fileNameWithoutExtension: string,
): string {
  return `${buildImportFromBaseFile([functionName], fileNameWithoutExtension)}

describe(${functionName}, () => {
  it('should be true', () => {
    const result = ${functionName}();
    expect(result).toBe(true);
  });
});`;
}
