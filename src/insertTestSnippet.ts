import { writeFileSync } from 'fs';
import { commands, Range, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { pickExtensionFromFileName } from './pickExtensionFromFileName';
import { pickFileDirectoryFromDocumentFileName } from './pickFileDirectoryFromDocumentFileName';
import { pickFileNameFromDocumentFileName } from './pickFileNameFromDocumentFileName';

export async function insertTestSnippet() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document, selection } = activeTextEditor;
  const functionName = document.getText(new Range(selection.start, selection.end));
  const fileName = pickFileNameFromDocumentFileName(document.fileName);
  const extension = pickExtensionFromFileName(fileName);
  const pathName = pickFileDirectoryFromDocumentFileName(document.fileName);
  const testFileName = buildNewTestFileName(pathName, functionName, extension);

  const template = `import { ${functionName} } from './${fileName}';
describe(${functionName}, () => {
  it('should be', () => {
    const result = ${functionName}();
    expect(result).toBe(true);
  });
});
`;

  writeFileSync(testFileName, template);
  await commands.executeCommand('vscode.open', Uri.file(testFileName));
}
