export function pickExtensionOfFile(fileName: string): string {
  return fileName.split('.').pop() ?? '';
}
