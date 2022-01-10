export function buildDescribeFromFunctionName(functionName: string): string {
  return `describe(${functionName}, () => {
  it('should be true', () => {
    const result = ${functionName}();
    expect(result).toBe(true);
  });
});`;
}
