export function pickFileNameWithoutExtension(fileName: string): string {
  const rest = fileName.split('.');
  rest.pop();
  return rest.join('.');
}
