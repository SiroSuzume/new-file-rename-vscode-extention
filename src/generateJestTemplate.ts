import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Range, Uri, window } from 'vscode';
import { buildNewTestFileName } from './buildNewTestFileName';
import { buildJestTemplate } from './jest/buildJestTemplate';

export async function generateJestTemplate() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document, selection } = activeTextEditor;

  const { dir, ext, name } = parse(document.fileName);
  const functionName = document.getText(new Range(selection.start, selection.end));

  const newTestFileName = buildNewTestFileName(dir, functionName, ext);
  const template = buildJestTemplate(functionName, name);

  writeFileSync(newTestFileName, template);
  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));
}
