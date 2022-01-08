export function findTestingFunctionName(sourceCode: string) {
  const match = /^describe\(["']?([a-zA-Z\d]+)["']?,/.exec(sourceCode);
  const newFileName = match?.[1] ?? '';
  return newFileName;
}
