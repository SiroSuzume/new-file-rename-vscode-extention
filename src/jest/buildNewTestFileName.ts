export function buildNewTestFileName(
  pathName: string,
  newFileName: string,
  extension: string,
): string {
  return `${pathName}/${newFileName}.test${extension}`;
}
