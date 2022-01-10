import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Range, Uri, window } from 'vscode';
import { buildJestTemplate } from './buildJestTemplate';
import { buildNewTestFileName } from './buildNewTestFileName';

export async function generateJestTemplateFile() {
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