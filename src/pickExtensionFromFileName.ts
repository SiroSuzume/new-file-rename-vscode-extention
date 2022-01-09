export function pickExtensionFromFileName(fileName: string): string {
  return fileName.split('.').pop() ?? '';
}
