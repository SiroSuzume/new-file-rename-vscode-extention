import { Range, TextEditor } from 'vscode';

export function pickSelectedTextFromCurrentDocument({ document, selection }: TextEditor) {
  return document.getText(new Range(selection.start, selection.end));
}
