import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Range, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { insertJestTemplate } from './insertJestTemplate';

export async function generateJestTemplateFile() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document, selection } = activeTextEditor;

  const { dir, ext, name } = parse(document.fileName);
  const functionName = document.getText(new Range(selection.start, selection.end));

  const newTestFileName = buildNewTestFileName(dir, functionName, ext);
  writeFileSync(newTestFileName, '');
  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));
  return insertJestTemplate(functionName, name);
}
