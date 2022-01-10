import { Position, window } from 'vscode';
import { buildJestTemplate } from './buildJestTemplate';

export async function insertJestTemplate(functionName: string, fileName: string) {
  const { activeTextEditor } = window;
  if (!activeTextEditor) {
    return;
  }
  const template = buildJestTemplate(functionName, fileName);
  activeTextEditor.edit((editBuilder) => {
    editBuilder.insert(new Position(0, 0), template);
  });
}
