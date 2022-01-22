import { writeFileSync } from 'fs';
import { parse } from 'path';
import { commands, Uri, window } from 'vscode';
import { pickSelectingWord } from '../pickSelectingWord';
import { buildNewStorybookFileName } from './buildNewStorybookFileName';
import { insertStorybookTemplate } from './insertStorybookTemplate';

export async function generateStorybookTemplateFile() {
  const { activeTextEditor } = window;

  if (!activeTextEditor) {
    return;
  }
  const { document } = activeTextEditor;

  const { dir, name } = parse(document.fileName);
  const functionName = pickSelectingWord(activeTextEditor);

  const newTestFileName = buildNewStorybookFileName(dir, name);
  writeFileSync(newTestFileName, '');

  await commands.executeCommand('vscode.open', Uri.file(newTestFileName));
  return insertStorybookTemplate(functionName, name);
}
