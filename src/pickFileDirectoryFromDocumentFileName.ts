export function pickFileDirectoryFromDocumentFileName(documentFileName: string): string {
  const rest = documentFileName.split('/');
  rest?.pop();
  return rest?.join('/') ?? '';
}
