export function buildNewTestFileName(
  pathName: string,
  newFileName: string,
  extension: string,
): import('fs').PathLike {
  return `${pathName}/${newFileName}.test.${extension}`;
}
