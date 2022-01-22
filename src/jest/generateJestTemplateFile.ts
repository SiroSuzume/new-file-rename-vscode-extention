import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Uri, window } from 'vscode';
import { pickSelectingWord } from '../pickSelectingWord';
import { buildNewTestFileName } from './buildNewTestFileName';
import { insertJestTemplate } from './insertJestTemplate';

export async function generateJestTemplateFile() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document } = activeTextEditor;

  const { dir, ext, name } = parse(document.fileName);
  const functionName = pickSelectingWord(activeTextEditor);

  const newTestFileName = buildNewTestFileName(dir, functionName, ext);
  writeFileSync(newTestFileName, '');
  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));
  return insertJestTemplate(functionName, name);
}
