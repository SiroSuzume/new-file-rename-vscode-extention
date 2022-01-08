export function pickFileNameFromDocumentFileName(documentFileName: string): string {
  return documentFileName.split('/').pop() ?? '';
}
