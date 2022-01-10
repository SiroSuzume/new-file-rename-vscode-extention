export function buildImportFromBaseFile(
  functionNames: string[],
  fileNameWithoutExtension: string,
): string {
  const functions = functionNames.join(', ');
  return `import { ${functions} } from './${fileNameWithoutExtension}';`;
}
