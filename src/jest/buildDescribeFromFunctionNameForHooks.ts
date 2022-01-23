import { buildImportFromBaseFile } from './buildImportFromBaseFile';

export function buildDescribeFromFunctionNameForHooks(
  functionName: string,
  fileNameWithoutExtension: string,
): string {
  return `import { renderHook, act } from '@testing-library/react-hooks'
${buildImportFromBaseFile([functionName], fileNameWithoutExtension)}

describe(${functionName}, () => {
  it('', async () => {
    const { result } = renderHook(() => ${functionName}())
    await act(() => result.current.anyAction)
    expect(result).toStrictEqual({})
  })
})
`;
}
