import { Position, window } from 'vscode';
import { buildStorybookTemplate } from './buildStorybookTemplate';

export async function insertStorybookTemplate(functionName: string, fileName: string) {
  const { activeTextEditor } = window;
  if (!activeTextEditor) {
    return;
  }
  const template = buildStorybookTemplate(functionName, fileName);
  activeTextEditor.edit((editBuilder) => {
    editBuilder.insert(new Position(0, 0), template);
  });
}
