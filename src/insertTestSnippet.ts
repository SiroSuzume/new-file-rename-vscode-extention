import { writeFileSync } from 'fs';
import { commands, Range, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { pickExtensionFromFileName } from './pickExtensionFromFileName';
import { pickFileDirectoryFromDocumentFileName } from './pickFileDirectoryFromDocumentFileName';
import { pickFileNameFromDocumentFileName } from './pickFileNameFromDocumentFileName';
import { pickFileNameWithoutExtension } from './pickFileNameWithoutExtension';

export async function insertTestSnippet() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document, selection } = activeTextEditor;

  const fileName = pickFileNameFromDocumentFileName(document.fileName);
  const extension = pickExtensionFromFileName(fileName);
  const pathName = pickFileDirectoryFromDocumentFileName(document.fileName);

  const functionName = document.getText(new Range(selection.start, selection.end));
  const testFileName = buildNewTestFileName(pathName, functionName, extension);
  const fileNameWithoutExtension = pickFileNameWithoutExtension(fileName);

  const template = `import { ${functionName} } from './${fileNameWithoutExtension}';

describe(${functionName}, () => {
  it('should be true', () => {
    const result = ${functionName}();
    expect(result).toBe(true);
  });
});
`;

  writeFileSync(testFileName, template);
  await commands.executeCommand('vscode.open', Uri.file(testFileName));
}
