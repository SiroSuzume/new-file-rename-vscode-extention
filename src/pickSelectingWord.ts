import { TextEditor } from 'vscode';

export function pickSelectingWord(textEditor: TextEditor) {
  const currentPosition = textEditor.selection.start;
  const selectingWordRange = textEditor.document.getWordRangeAtPosition(currentPosition);
  return textEditor.document.getText(selectingWordRange);
}
