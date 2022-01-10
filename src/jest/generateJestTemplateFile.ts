import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { insertJestTemplate } from './insertJestTemplate';
import { pickSelectedTextFromCurrentDocument } from './pickSelectedTextFromCurrentDocument';

export async function generateJestTemplateFile() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document } = activeTextEditor;

  const { dir, ext, name } = parse(document.fileName);
  const functionName = pickSelectedTextFromCurrentDocument(activeTextEditor);

  const newTestFileName = buildNewTestFileName(dir, functionName, ext);
  writeFileSync(newTestFileName, '');
  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));
  return insertJestTemplate(functionName, name);
}
